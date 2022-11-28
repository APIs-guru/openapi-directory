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
var CreateTaskQueryParams = /** @class */ (function (_super) {
    __extends(CreateTaskQueryParams, _super);
    function CreateTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateTaskQueryParams.prototype, "optPretty", void 0);
    return CreateTaskQueryParams;
}(SpeakeasyBase));
export { CreateTaskQueryParams };
var CreateTaskRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateTaskRequestBodyInput, _super);
    function CreateTaskRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskRequestInput)
    ], CreateTaskRequestBodyInput.prototype, "data", void 0);
    return CreateTaskRequestBodyInput;
}(SpeakeasyBase));
export { CreateTaskRequestBodyInput };
var CreateTask201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTask201ApplicationJson, _super);
    function CreateTask201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskResponse)
    ], CreateTask201ApplicationJson.prototype, "data", void 0);
    return CreateTask201ApplicationJson;
}(SpeakeasyBase));
export { CreateTask201ApplicationJson };
var CreateTaskRequest = /** @class */ (function (_super) {
    __extends(CreateTaskRequest, _super);
    function CreateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTaskQueryParams)
    ], CreateTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTaskRequestBodyInput)
    ], CreateTaskRequest.prototype, "request", void 0);
    return CreateTaskRequest;
}(SpeakeasyBase));
export { CreateTaskRequest };
var CreateTaskResponse = /** @class */ (function (_super) {
    __extends(CreateTaskResponse, _super);
    function CreateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTask201ApplicationJson)
    ], CreateTaskResponse.prototype, "createTask201ApplicationJsonObject", void 0);
    return CreateTaskResponse;
}(SpeakeasyBase));
export { CreateTaskResponse };
