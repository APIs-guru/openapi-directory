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
var UpdateTaskPathParams = /** @class */ (function (_super) {
    __extends(UpdateTaskPathParams, _super);
    function UpdateTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], UpdateTaskPathParams.prototype, "taskGid", void 0);
    return UpdateTaskPathParams;
}(SpeakeasyBase));
export { UpdateTaskPathParams };
var UpdateTaskQueryParams = /** @class */ (function (_super) {
    __extends(UpdateTaskQueryParams, _super);
    function UpdateTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateTaskQueryParams.prototype, "optPretty", void 0);
    return UpdateTaskQueryParams;
}(SpeakeasyBase));
export { UpdateTaskQueryParams };
var UpdateTaskRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateTaskRequestBodyInput, _super);
    function UpdateTaskRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskRequestInput)
    ], UpdateTaskRequestBodyInput.prototype, "data", void 0);
    return UpdateTaskRequestBodyInput;
}(SpeakeasyBase));
export { UpdateTaskRequestBodyInput };
var UpdateTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTask200ApplicationJson, _super);
    function UpdateTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskResponse)
    ], UpdateTask200ApplicationJson.prototype, "data", void 0);
    return UpdateTask200ApplicationJson;
}(SpeakeasyBase));
export { UpdateTask200ApplicationJson };
var UpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskRequest, _super);
    function UpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTaskPathParams)
    ], UpdateTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTaskQueryParams)
    ], UpdateTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateTaskRequestBodyInput)
    ], UpdateTaskRequest.prototype, "request", void 0);
    return UpdateTaskRequest;
}(SpeakeasyBase));
export { UpdateTaskRequest };
var UpdateTaskResponse = /** @class */ (function (_super) {
    __extends(UpdateTaskResponse, _super);
    function UpdateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTask200ApplicationJson)
    ], UpdateTaskResponse.prototype, "updateTask200ApplicationJsonObject", void 0);
    return UpdateTaskResponse;
}(SpeakeasyBase));
export { UpdateTaskResponse };
