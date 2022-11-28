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
var AddDependentsForTaskPathParams = /** @class */ (function (_super) {
    __extends(AddDependentsForTaskPathParams, _super);
    function AddDependentsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], AddDependentsForTaskPathParams.prototype, "taskGid", void 0);
    return AddDependentsForTaskPathParams;
}(SpeakeasyBase));
export { AddDependentsForTaskPathParams };
var AddDependentsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(AddDependentsForTaskQueryParams, _super);
    function AddDependentsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddDependentsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddDependentsForTaskQueryParams.prototype, "optPretty", void 0);
    return AddDependentsForTaskQueryParams;
}(SpeakeasyBase));
export { AddDependentsForTaskQueryParams };
var AddDependentsForTaskRequestBody = /** @class */ (function (_super) {
    __extends(AddDependentsForTaskRequestBody, _super);
    function AddDependentsForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ModifyDependentsRequest)
    ], AddDependentsForTaskRequestBody.prototype, "data", void 0);
    return AddDependentsForTaskRequestBody;
}(SpeakeasyBase));
export { AddDependentsForTaskRequestBody };
var AddDependentsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddDependentsForTask200ApplicationJson, _super);
    function AddDependentsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], AddDependentsForTask200ApplicationJson.prototype, "data", void 0);
    return AddDependentsForTask200ApplicationJson;
}(SpeakeasyBase));
export { AddDependentsForTask200ApplicationJson };
var AddDependentsForTaskRequest = /** @class */ (function (_super) {
    __extends(AddDependentsForTaskRequest, _super);
    function AddDependentsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependentsForTaskPathParams)
    ], AddDependentsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependentsForTaskQueryParams)
    ], AddDependentsForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddDependentsForTaskRequestBody)
    ], AddDependentsForTaskRequest.prototype, "request", void 0);
    return AddDependentsForTaskRequest;
}(SpeakeasyBase));
export { AddDependentsForTaskRequest };
var AddDependentsForTaskResponse = /** @class */ (function (_super) {
    __extends(AddDependentsForTaskResponse, _super);
    function AddDependentsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddDependentsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddDependentsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddDependentsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddDependentsForTask200ApplicationJson)
    ], AddDependentsForTaskResponse.prototype, "addDependentsForTask200ApplicationJsonObject", void 0);
    return AddDependentsForTaskResponse;
}(SpeakeasyBase));
export { AddDependentsForTaskResponse };
