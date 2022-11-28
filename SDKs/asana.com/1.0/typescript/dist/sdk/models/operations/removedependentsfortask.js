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
var RemoveDependentsForTaskPathParams = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskPathParams, _super);
    function RemoveDependentsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], RemoveDependentsForTaskPathParams.prototype, "taskGid", void 0);
    return RemoveDependentsForTaskPathParams;
}(SpeakeasyBase));
export { RemoveDependentsForTaskPathParams };
var RemoveDependentsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskQueryParams, _super);
    function RemoveDependentsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveDependentsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveDependentsForTaskQueryParams.prototype, "optPretty", void 0);
    return RemoveDependentsForTaskQueryParams;
}(SpeakeasyBase));
export { RemoveDependentsForTaskQueryParams };
var RemoveDependentsForTaskRequestBody = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskRequestBody, _super);
    function RemoveDependentsForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ModifyDependentsRequest)
    ], RemoveDependentsForTaskRequestBody.prototype, "data", void 0);
    return RemoveDependentsForTaskRequestBody;
}(SpeakeasyBase));
export { RemoveDependentsForTaskRequestBody };
var RemoveDependentsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTask200ApplicationJson, _super);
    function RemoveDependentsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], RemoveDependentsForTask200ApplicationJson.prototype, "data", void 0);
    return RemoveDependentsForTask200ApplicationJson;
}(SpeakeasyBase));
export { RemoveDependentsForTask200ApplicationJson };
var RemoveDependentsForTaskRequest = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskRequest, _super);
    function RemoveDependentsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependentsForTaskPathParams)
    ], RemoveDependentsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependentsForTaskQueryParams)
    ], RemoveDependentsForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveDependentsForTaskRequestBody)
    ], RemoveDependentsForTaskRequest.prototype, "request", void 0);
    return RemoveDependentsForTaskRequest;
}(SpeakeasyBase));
export { RemoveDependentsForTaskRequest };
var RemoveDependentsForTaskResponse = /** @class */ (function (_super) {
    __extends(RemoveDependentsForTaskResponse, _super);
    function RemoveDependentsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveDependentsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveDependentsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveDependentsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveDependentsForTask200ApplicationJson)
    ], RemoveDependentsForTaskResponse.prototype, "removeDependentsForTask200ApplicationJsonObject", void 0);
    return RemoveDependentsForTaskResponse;
}(SpeakeasyBase));
export { RemoveDependentsForTaskResponse };
