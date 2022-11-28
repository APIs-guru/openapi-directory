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
var SetParentForTaskPathParams = /** @class */ (function (_super) {
    __extends(SetParentForTaskPathParams, _super);
    function SetParentForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], SetParentForTaskPathParams.prototype, "taskGid", void 0);
    return SetParentForTaskPathParams;
}(SpeakeasyBase));
export { SetParentForTaskPathParams };
var SetParentForTaskQueryParams = /** @class */ (function (_super) {
    __extends(SetParentForTaskQueryParams, _super);
    function SetParentForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], SetParentForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], SetParentForTaskQueryParams.prototype, "optPretty", void 0);
    return SetParentForTaskQueryParams;
}(SpeakeasyBase));
export { SetParentForTaskQueryParams };
var SetParentForTaskRequestBody = /** @class */ (function (_super) {
    __extends(SetParentForTaskRequestBody, _super);
    function SetParentForTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskSetParentRequest)
    ], SetParentForTaskRequestBody.prototype, "data", void 0);
    return SetParentForTaskRequestBody;
}(SpeakeasyBase));
export { SetParentForTaskRequestBody };
var SetParentForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetParentForTask200ApplicationJson, _super);
    function SetParentForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskResponse)
    ], SetParentForTask200ApplicationJson.prototype, "data", void 0);
    return SetParentForTask200ApplicationJson;
}(SpeakeasyBase));
export { SetParentForTask200ApplicationJson };
var SetParentForTaskRequest = /** @class */ (function (_super) {
    __extends(SetParentForTaskRequest, _super);
    function SetParentForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetParentForTaskPathParams)
    ], SetParentForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetParentForTaskQueryParams)
    ], SetParentForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetParentForTaskRequestBody)
    ], SetParentForTaskRequest.prototype, "request", void 0);
    return SetParentForTaskRequest;
}(SpeakeasyBase));
export { SetParentForTaskRequest };
var SetParentForTaskResponse = /** @class */ (function (_super) {
    __extends(SetParentForTaskResponse, _super);
    function SetParentForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetParentForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], SetParentForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetParentForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetParentForTask200ApplicationJson)
    ], SetParentForTaskResponse.prototype, "setParentForTask200ApplicationJsonObject", void 0);
    return SetParentForTaskResponse;
}(SpeakeasyBase));
export { SetParentForTaskResponse };
