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
var RemoveTagForTaskPathParams = /** @class */ (function (_super) {
    __extends(RemoveTagForTaskPathParams, _super);
    function RemoveTagForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], RemoveTagForTaskPathParams.prototype, "taskGid", void 0);
    return RemoveTagForTaskPathParams;
}(SpeakeasyBase));
export { RemoveTagForTaskPathParams };
var RemoveTagForTaskQueryParams = /** @class */ (function (_super) {
    __extends(RemoveTagForTaskQueryParams, _super);
    function RemoveTagForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveTagForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveTagForTaskQueryParams.prototype, "optPretty", void 0);
    return RemoveTagForTaskQueryParams;
}(SpeakeasyBase));
export { RemoveTagForTaskQueryParams };
var RemoveTagForTaskRequestBody = /** @class */ (function (_super) {
    __extends(RemoveTagForTaskRequestBody, _super);
    function RemoveTagForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskRemoveTagRequest)
    ], RemoveTagForTaskRequestBody.prototype, "data", void 0);
    return RemoveTagForTaskRequestBody;
}(SpeakeasyBase));
export { RemoveTagForTaskRequestBody };
var RemoveTagForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveTagForTask200ApplicationJson, _super);
    function RemoveTagForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveTagForTask200ApplicationJson.prototype, "data", void 0);
    return RemoveTagForTask200ApplicationJson;
}(SpeakeasyBase));
export { RemoveTagForTask200ApplicationJson };
var RemoveTagForTaskRequest = /** @class */ (function (_super) {
    __extends(RemoveTagForTaskRequest, _super);
    function RemoveTagForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveTagForTaskPathParams)
    ], RemoveTagForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveTagForTaskQueryParams)
    ], RemoveTagForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveTagForTaskRequestBody)
    ], RemoveTagForTaskRequest.prototype, "request", void 0);
    return RemoveTagForTaskRequest;
}(SpeakeasyBase));
export { RemoveTagForTaskRequest };
var RemoveTagForTaskResponse = /** @class */ (function (_super) {
    __extends(RemoveTagForTaskResponse, _super);
    function RemoveTagForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveTagForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveTagForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveTagForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveTagForTask200ApplicationJson)
    ], RemoveTagForTaskResponse.prototype, "removeTagForTask200ApplicationJsonObject", void 0);
    return RemoveTagForTaskResponse;
}(SpeakeasyBase));
export { RemoveTagForTaskResponse };
