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
var ActionsCreateOrUpdateEnvironmentSecretPathParams = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateEnvironmentSecretPathParams, _super);
    function ActionsCreateOrUpdateEnvironmentSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateEnvironmentSecretPathParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" }),
        __metadata("design:type", Number)
    ], ActionsCreateOrUpdateEnvironmentSecretPathParams.prototype, "repositoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateEnvironmentSecretPathParams.prototype, "secretName", void 0);
    return ActionsCreateOrUpdateEnvironmentSecretPathParams;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateEnvironmentSecretPathParams };
var ActionsCreateOrUpdateEnvironmentSecretRequestBody = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateEnvironmentSecretRequestBody, _super);
    function ActionsCreateOrUpdateEnvironmentSecretRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted_value" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateEnvironmentSecretRequestBody.prototype, "encryptedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_id" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateEnvironmentSecretRequestBody.prototype, "keyId", void 0);
    return ActionsCreateOrUpdateEnvironmentSecretRequestBody;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateEnvironmentSecretRequestBody };
var ActionsCreateOrUpdateEnvironmentSecretRequest = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateEnvironmentSecretRequest, _super);
    function ActionsCreateOrUpdateEnvironmentSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsCreateOrUpdateEnvironmentSecretPathParams)
    ], ActionsCreateOrUpdateEnvironmentSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsCreateOrUpdateEnvironmentSecretRequestBody)
    ], ActionsCreateOrUpdateEnvironmentSecretRequest.prototype, "request", void 0);
    return ActionsCreateOrUpdateEnvironmentSecretRequest;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateEnvironmentSecretRequest };
var ActionsCreateOrUpdateEnvironmentSecretResponse = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateEnvironmentSecretResponse, _super);
    function ActionsCreateOrUpdateEnvironmentSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateEnvironmentSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsCreateOrUpdateEnvironmentSecretResponse.prototype, "statusCode", void 0);
    return ActionsCreateOrUpdateEnvironmentSecretResponse;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateEnvironmentSecretResponse };
