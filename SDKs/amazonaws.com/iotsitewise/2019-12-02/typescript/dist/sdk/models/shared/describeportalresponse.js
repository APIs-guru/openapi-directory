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
import { Alarms } from "./alarms";
import { AuthModeEnum } from "./authmodeenum";
import { ImageLocation } from "./imagelocation";
import { PortalStatus } from "./portalstatus";
var DescribePortalResponse = /** @class */ (function (_super) {
    __extends(DescribePortalResponse, _super);
    function DescribePortalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarms" }),
        __metadata("design:type", Alarms)
    ], DescribePortalResponse.prototype, "alarms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationSenderEmail" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "notificationSenderEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalArn" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalAuthMode" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalAuthMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalClientId" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalContactEmail" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalCreationDate" }),
        __metadata("design:type", Date)
    ], DescribePortalResponse.prototype, "portalCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalDescription" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalId" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalLastUpdateDate" }),
        __metadata("design:type", Date)
    ], DescribePortalResponse.prototype, "portalLastUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalLogoImageLocation" }),
        __metadata("design:type", ImageLocation)
    ], DescribePortalResponse.prototype, "portalLogoImageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalName" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalStartUrl" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "portalStartUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalStatus" }),
        __metadata("design:type", PortalStatus)
    ], DescribePortalResponse.prototype, "portalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DescribePortalResponse.prototype, "roleArn", void 0);
    return DescribePortalResponse;
}(SpeakeasyBase));
export { DescribePortalResponse };
