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
var CreateEnvironmentRequestBodyEnvironmentValues = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBodyEnvironmentValues, _super);
    function CreateEnvironmentRequestBodyEnvironmentValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyEnvironmentValues.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyEnvironmentValues.prototype, "value", void 0);
    return CreateEnvironmentRequestBodyEnvironmentValues;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBodyEnvironmentValues };
var CreateEnvironmentRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBodyEnvironment, _super);
    function CreateEnvironmentRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateEnvironmentRequestBodyEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: CreateEnvironmentRequestBodyEnvironmentValues }),
        __metadata("design:type", Array)
    ], CreateEnvironmentRequestBodyEnvironment.prototype, "values", void 0);
    return CreateEnvironmentRequestBodyEnvironment;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBodyEnvironment };
var CreateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequestBody, _super);
    function CreateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", CreateEnvironmentRequestBodyEnvironment)
    ], CreateEnvironmentRequestBody.prototype, "environment", void 0);
    return CreateEnvironmentRequestBody;
}(SpeakeasyBase));
export { CreateEnvironmentRequestBody };
var CreateEnvironment200ApplicationJsonEnvironment = /** @class */ (function (_super) {
    __extends(CreateEnvironment200ApplicationJsonEnvironment, _super);
    function CreateEnvironment200ApplicationJsonEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateEnvironment200ApplicationJsonEnvironment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateEnvironment200ApplicationJsonEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateEnvironment200ApplicationJsonEnvironment.prototype, "uid", void 0);
    return CreateEnvironment200ApplicationJsonEnvironment;
}(SpeakeasyBase));
export { CreateEnvironment200ApplicationJsonEnvironment };
var CreateEnvironment200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateEnvironment200ApplicationJson, _super);
    function CreateEnvironment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", CreateEnvironment200ApplicationJsonEnvironment)
    ], CreateEnvironment200ApplicationJson.prototype, "environment", void 0);
    return CreateEnvironment200ApplicationJson;
}(SpeakeasyBase));
export { CreateEnvironment200ApplicationJson };
var CreateEnvironment400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(CreateEnvironment400ApplicationJsonError, _super);
    function CreateEnvironment400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateEnvironment400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateEnvironment400ApplicationJsonError.prototype, "name", void 0);
    return CreateEnvironment400ApplicationJsonError;
}(SpeakeasyBase));
export { CreateEnvironment400ApplicationJsonError };
var CreateEnvironment400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateEnvironment400ApplicationJson, _super);
    function CreateEnvironment400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", CreateEnvironment400ApplicationJsonError)
    ], CreateEnvironment400ApplicationJson.prototype, "error", void 0);
    return CreateEnvironment400ApplicationJson;
}(SpeakeasyBase));
export { CreateEnvironment400ApplicationJson };
var CreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequest, _super);
    function CreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEnvironmentRequestBody)
    ], CreateEnvironmentRequest.prototype, "request", void 0);
    return CreateEnvironmentRequest;
}(SpeakeasyBase));
export { CreateEnvironmentRequest };
var CreateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateEnvironmentResponse, _super);
    function CreateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironment200ApplicationJson)
    ], CreateEnvironmentResponse.prototype, "createEnvironment200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironment400ApplicationJson)
    ], CreateEnvironmentResponse.prototype, "createEnvironment400ApplicationJsonObject", void 0);
    return CreateEnvironmentResponse;
}(SpeakeasyBase));
export { CreateEnvironmentResponse };
