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
var RemoveProjectForTaskPathParams = /** @class */ (function (_super) {
    __extends(RemoveProjectForTaskPathParams, _super);
    function RemoveProjectForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], RemoveProjectForTaskPathParams.prototype, "taskGid", void 0);
    return RemoveProjectForTaskPathParams;
}(SpeakeasyBase));
export { RemoveProjectForTaskPathParams };
var RemoveProjectForTaskQueryParams = /** @class */ (function (_super) {
    __extends(RemoveProjectForTaskQueryParams, _super);
    function RemoveProjectForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveProjectForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveProjectForTaskQueryParams.prototype, "optPretty", void 0);
    return RemoveProjectForTaskQueryParams;
}(SpeakeasyBase));
export { RemoveProjectForTaskQueryParams };
var RemoveProjectForTaskRequestBody = /** @class */ (function (_super) {
    __extends(RemoveProjectForTaskRequestBody, _super);
    function RemoveProjectForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskRemoveProjectRequest)
    ], RemoveProjectForTaskRequestBody.prototype, "data", void 0);
    return RemoveProjectForTaskRequestBody;
}(SpeakeasyBase));
export { RemoveProjectForTaskRequestBody };
var RemoveProjectForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveProjectForTask200ApplicationJson, _super);
    function RemoveProjectForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveProjectForTask200ApplicationJson.prototype, "data", void 0);
    return RemoveProjectForTask200ApplicationJson;
}(SpeakeasyBase));
export { RemoveProjectForTask200ApplicationJson };
var RemoveProjectForTaskRequest = /** @class */ (function (_super) {
    __extends(RemoveProjectForTaskRequest, _super);
    function RemoveProjectForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveProjectForTaskPathParams)
    ], RemoveProjectForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveProjectForTaskQueryParams)
    ], RemoveProjectForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveProjectForTaskRequestBody)
    ], RemoveProjectForTaskRequest.prototype, "request", void 0);
    return RemoveProjectForTaskRequest;
}(SpeakeasyBase));
export { RemoveProjectForTaskRequest };
var RemoveProjectForTaskResponse = /** @class */ (function (_super) {
    __extends(RemoveProjectForTaskResponse, _super);
    function RemoveProjectForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveProjectForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveProjectForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveProjectForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveProjectForTask200ApplicationJson)
    ], RemoveProjectForTaskResponse.prototype, "removeProjectForTask200ApplicationJsonObject", void 0);
    return RemoveProjectForTaskResponse;
}(SpeakeasyBase));
export { RemoveProjectForTaskResponse };
