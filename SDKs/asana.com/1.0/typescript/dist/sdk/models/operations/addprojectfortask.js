var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var AddProjectForTaskPathParams = /** @class */ (function (_super) {
    __extends(AddProjectForTaskPathParams, _super);
    function AddProjectForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], AddProjectForTaskPathParams.prototype, "taskGid", void 0);
    return AddProjectForTaskPathParams;
}(SpeakeasyBase));
export { AddProjectForTaskPathParams };
var AddProjectForTaskQueryParams = /** @class */ (function (_super) {
    __extends(AddProjectForTaskQueryParams, _super);
    function AddProjectForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddProjectForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddProjectForTaskQueryParams.prototype, "optPretty", void 0);
    return AddProjectForTaskQueryParams;
}(SpeakeasyBase));
export { AddProjectForTaskQueryParams };
var AddProjectForTaskRequestBody = /** @class */ (function (_super) {
    __extends(AddProjectForTaskRequestBody, _super);
    function AddProjectForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskAddProjectRequest)
    ], AddProjectForTaskRequestBody.prototype, "data", void 0);
    return AddProjectForTaskRequestBody;
}(SpeakeasyBase));
export { AddProjectForTaskRequestBody };
var AddProjectForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddProjectForTask200ApplicationJson, _super);
    function AddProjectForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddProjectForTask200ApplicationJson.prototype, "data", void 0);
    return AddProjectForTask200ApplicationJson;
}(SpeakeasyBase));
export { AddProjectForTask200ApplicationJson };
var AddProjectForTaskRequest = /** @class */ (function (_super) {
    __extends(AddProjectForTaskRequest, _super);
    function AddProjectForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddProjectForTaskPathParams)
    ], AddProjectForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddProjectForTaskQueryParams)
    ], AddProjectForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddProjectForTaskRequestBody)
    ], AddProjectForTaskRequest.prototype, "request", void 0);
    return AddProjectForTaskRequest;
}(SpeakeasyBase));
export { AddProjectForTaskRequest };
var AddProjectForTaskResponse = /** @class */ (function (_super) {
    __extends(AddProjectForTaskResponse, _super);
    function AddProjectForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddProjectForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddProjectForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddProjectForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddProjectForTask200ApplicationJson)
    ], AddProjectForTaskResponse.prototype, "addProjectForTask200ApplicationJsonObject", void 0);
    return AddProjectForTaskResponse;
}(SpeakeasyBase));
export { AddProjectForTaskResponse };
