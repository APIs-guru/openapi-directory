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
// ApnsSandboxChannelResponse
/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
**/
var ApnsSandboxChannelResponse = /** @class */ (function (_super) {
    __extends(ApnsSandboxChannelResponse, _super);
    function ApnsSandboxChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthenticationMethod" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "defaultAuthenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], ApnsSandboxChannelResponse.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasCredential" }),
        __metadata("design:type", Boolean)
    ], ApnsSandboxChannelResponse.prototype, "hasCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasTokenKey" }),
        __metadata("design:type", Boolean)
    ], ApnsSandboxChannelResponse.prototype, "hasTokenKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsArchived" }),
        __metadata("design:type", Boolean)
    ], ApnsSandboxChannelResponse.prototype, "isArchived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Platform" }),
        __metadata("design:type", String)
    ], ApnsSandboxChannelResponse.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], ApnsSandboxChannelResponse.prototype, "version", void 0);
    return ApnsSandboxChannelResponse;
}(SpeakeasyBase));
export { ApnsSandboxChannelResponse };
