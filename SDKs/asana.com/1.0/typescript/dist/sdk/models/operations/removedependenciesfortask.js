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
var RemoveDependenciesForTaskPathParams = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTaskPathParams, _super);
    function RemoveDependenciesForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], RemoveDependenciesForTaskPathParams.prototype, "taskGid", void 0);
    return RemoveDependenciesForTaskPathParams;
}(SpeakeasyBase));
export { RemoveDependenciesForTaskPathParams };
var RemoveDependenciesForTaskQueryParams = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTaskQueryParams, _super);
    function RemoveDependenciesForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveDependenciesForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveDependenciesForTaskQueryParams.prototype, "optPretty", void 0);
    return RemoveDependenciesForTaskQueryParams;
}(SpeakeasyBase));
export { RemoveDependenciesForTaskQueryParams };
var RemoveDependenciesForTaskRequestBody = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTaskRequestBody, _super);
    function RemoveDependenciesForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ModifyDependenciesRequest)
    ], RemoveDependenciesForTaskRequestBody.prototype, "data", void 0);
    return RemoveDependenciesForTaskRequestBody;
}(SpeakeasyBase));
export { RemoveDependenciesForTaskRequestBody };
var RemoveDependenciesForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTask200ApplicationJson, _super);
    function RemoveDependenciesForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], RemoveDependenciesForTask200ApplicationJson.prototype, "data", void 0);
    return RemoveDependenciesForTask200ApplicationJson;
}(SpeakeasyBase));
export { RemoveDependenciesForTask200ApplicationJson };
var RemoveDependenciesForTaskRequest = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTaskRequest, _super);
    function RemoveDependenciesForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependenciesForTaskPathParams)
    ], RemoveDependenciesForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependenciesForTaskQueryParams)
    ], RemoveDependenciesForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveDependenciesForTaskRequestBody)
    ], RemoveDependenciesForTaskRequest.prototype, "request", void 0);
    return RemoveDependenciesForTaskRequest;
}(SpeakeasyBase));
export { RemoveDependenciesForTaskRequest };
var RemoveDependenciesForTaskResponse = /** @class */ (function (_super) {
    __extends(RemoveDependenciesForTaskResponse, _super);
    function RemoveDependenciesForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveDependenciesForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveDependenciesForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveDependenciesForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependenciesForTask200ApplicationJson)
    ], RemoveDependenciesForTaskResponse.prototype, "removeDependenciesForTask200ApplicationJsonObject", void 0);
    return RemoveDependenciesForTaskResponse;
}(SpeakeasyBase));
export { RemoveDependenciesForTaskResponse };
