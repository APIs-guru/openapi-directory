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
var ActionsCreateOrUpdateOrgSecretPathParams = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateOrgSecretPathParams, _super);
    function ActionsCreateOrUpdateOrgSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretPathParams.prototype, "secretName", void 0);
    return ActionsCreateOrUpdateOrgSecretPathParams;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateOrgSecretPathParams };
export var ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
(function (ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum) {
    ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum["All"] = "all";
    ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum["Private"] = "private";
    ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum["Selected"] = "selected";
})(ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum || (ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = {}));
var ActionsCreateOrUpdateOrgSecretRequestBody = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateOrgSecretRequestBody, _super);
    function ActionsCreateOrUpdateOrgSecretRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted_value" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretRequestBody.prototype, "encryptedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_id" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretRequestBody.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_repository_ids" }),
        __metadata("design:type", Array)
    ], ActionsCreateOrUpdateOrgSecretRequestBody.prototype, "selectedRepositoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretRequestBody.prototype, "visibility", void 0);
    return ActionsCreateOrUpdateOrgSecretRequestBody;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateOrgSecretRequestBody };
var ActionsCreateOrUpdateOrgSecretRequest = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateOrgSecretRequest, _super);
    function ActionsCreateOrUpdateOrgSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsCreateOrUpdateOrgSecretPathParams)
    ], ActionsCreateOrUpdateOrgSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsCreateOrUpdateOrgSecretRequestBody)
    ], ActionsCreateOrUpdateOrgSecretRequest.prototype, "request", void 0);
    return ActionsCreateOrUpdateOrgSecretRequest;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateOrgSecretRequest };
var ActionsCreateOrUpdateOrgSecretResponse = /** @class */ (function (_super) {
    __extends(ActionsCreateOrUpdateOrgSecretResponse, _super);
    function ActionsCreateOrUpdateOrgSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsCreateOrUpdateOrgSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsCreateOrUpdateOrgSecretResponse.prototype, "statusCode", void 0);
    return ActionsCreateOrUpdateOrgSecretResponse;
}(SpeakeasyBase));
export { ActionsCreateOrUpdateOrgSecretResponse };
