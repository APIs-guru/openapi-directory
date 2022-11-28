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
var DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams, _super);
    function DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" }),
        __metadata("design:type", String)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=senderName" }),
        __metadata("design:type", String)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams.prototype, "senderName", void 0);
    return DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;
}(SpeakeasyBase));
export { DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams };
var DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = /** @class */ (function (_super) {
    __extends(DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity, _super);
    function DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity.prototype, "oAuth2", void 0);
    return DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}(SpeakeasyBase));
export { DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity };
var DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest = /** @class */ (function (_super) {
    __extends(DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest, _super);
    function DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest.prototype, "security", void 0);
    return DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
}(SpeakeasyBase));
export { DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest };
var DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse = /** @class */ (function (_super) {
    __extends(DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse, _super);
    function DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Sender)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse.prototype, "statusCode", void 0);
    return DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse;
}(SpeakeasyBase));
export { DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse };
