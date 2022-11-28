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
var PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = /** @class */ (function (_super) {
    __extends(PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams, _super);
    function PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" }),
        __metadata("design:type", String)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=receiverName" }),
        __metadata("design:type", String)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams.prototype, "receiverName", void 0);
    return PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;
}(SpeakeasyBase));
export { PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams };
var PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = /** @class */ (function (_super) {
    __extends(PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity, _super);
    function PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity.prototype, "oAuth2", void 0);
    return PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}(SpeakeasyBase));
export { PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity };
var PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest = /** @class */ (function (_super) {
    __extends(PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, _super);
    function PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReceiverInput)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest.prototype, "security", void 0);
    return PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
}(SpeakeasyBase));
export { PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest };
var PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = /** @class */ (function (_super) {
    __extends(PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse, _super);
    function PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Receiver)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse.prototype, "receiver", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse.prototype, "statusCode", void 0);
    return PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse;
}(SpeakeasyBase));
export { PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse };
