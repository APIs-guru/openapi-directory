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
var ActionsCreateOrUpdateRepoSecretPathParams = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateRepoSecretPathParams, _super);
    function ActionsCreateOrUpdateRepoSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretPathParams.prototype, "secretName", void 0);
    return ActionsCreateOrUpdateRepoSecretPathParams;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateRepoSecretPathParams };
var ActionsCreateOrUpdateRepoSecretRequestBody = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateRepoSecretRequestBody, _super);
    function ActionsCreateOrUpdateRepoSecretRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted_value" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretRequestBody.prototype, "encryptedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_id" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretRequestBody.prototype, "keyId", void 0);
    return ActionsCreateOrUpdateRepoSecretRequestBody;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateRepoSecretRequestBody };
var ActionsCreateOrUpdateRepoSecretRequest = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateRepoSecretRequest, _super);
    function ActionsCreateOrUpdateRepoSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsCreateOrUpdateRepoSecretPathParams)
    ], ActionsCreateOrUpdateRepoSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsCreateOrUpdateRepoSecretRequestBody)
    ], ActionsCreateOrUpdateRepoSecretRequest.prototype, "request", void 0);
    return ActionsCreateOrUpdateRepoSecretRequest;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateRepoSecretRequest };
var ActionsCreateOrUpdateRepoSecretResponse = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateRepoSecretResponse, _super);
    function ActionsCreateOrUpdateRepoSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateRepoSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsCreateOrUpdateRepoSecretResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsCreateOrUpdateRepoSecretResponse.prototype, "actionsCreateOrUpdateRepoSecret201ApplicationJsonObject", void 0);
    return ActionsCreateOrUpdateRepoSecretResponse;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateRepoSecretResponse };
