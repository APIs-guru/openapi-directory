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
export var ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;
(function (ApiKeyUpdateCurrentRequestBodyPermissionSetEnum) {
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["None"] = "none";
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["Full"] = "full";
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["DesktopApp"] = "desktop_app";
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["SyncApp"] = "sync_app";
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["OfficeIntegration"] = "office_integration";
    ApiKeyUpdateCurrentRequestBodyPermissionSetEnum["MobileApp"] = "mobile_app";
})(ApiKeyUpdateCurrentRequestBodyPermissionSetEnum || (ApiKeyUpdateCurrentRequestBodyPermissionSetEnum = {}));
var ApiKeyUpdateCurrentRequestBody = /** @class */ (function (_super) {
    __extends(ApiKeyUpdateCurrentRequestBody, _super);
    function ApiKeyUpdateCurrentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expires_at" }),
        __metadata("design:type", Date)
    ], ApiKeyUpdateCurrentRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], ApiKeyUpdateCurrentRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=permission_set" }),
        __metadata("design:type", String)
    ], ApiKeyUpdateCurrentRequestBody.prototype, "permissionSet", void 0);
    return ApiKeyUpdateCurrentRequestBody;
}(SpeakeasyBase));
export { ApiKeyUpdateCurrentRequestBody };
var ApiKeyUpdateCurrentRequest = /** @class */ (function (_super) {
    __extends(ApiKeyUpdateCurrentRequest, _super);
    function ApiKeyUpdateCurrentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ApiKeyUpdateCurrentRequestBody)
    ], ApiKeyUpdateCurrentRequest.prototype, "request", void 0);
    return ApiKeyUpdateCurrentRequest;
}(SpeakeasyBase));
export { ApiKeyUpdateCurrentRequest };
var ApiKeyUpdateCurrentResponse = /** @class */ (function (_super) {
    __extends(ApiKeyUpdateCurrentResponse, _super);
    function ApiKeyUpdateCurrentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKeyEntity)
    ], ApiKeyUpdateCurrentResponse.prototype, "apiKeyEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiKeyUpdateCurrentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiKeyUpdateCurrentResponse.prototype, "statusCode", void 0);
    return ApiKeyUpdateCurrentResponse;
}(SpeakeasyBase));
export { ApiKeyUpdateCurrentResponse };
