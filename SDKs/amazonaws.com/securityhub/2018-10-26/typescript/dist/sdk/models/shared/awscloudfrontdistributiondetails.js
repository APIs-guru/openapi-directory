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
import { AwsCloudFrontDistributionCacheBehaviors } from "./awscloudfrontdistributioncachebehaviors";
import { AwsCloudFrontDistributionDefaultCacheBehavior } from "./awscloudfrontdistributiondefaultcachebehavior";
import { AwsCloudFrontDistributionLogging } from "./awscloudfrontdistributionlogging";
import { AwsCloudFrontDistributionOriginGroups } from "./awscloudfrontdistributionorigingroups";
import { AwsCloudFrontDistributionOrigins } from "./awscloudfrontdistributionorigins";
// AwsCloudFrontDistributionDetails
/**
 * A distribution configuration.
**/
var AwsCloudFrontDistributionDetails = /** @class */ (function (_super) {
    __extends(AwsCloudFrontDistributionDetails, _super);
    function AwsCloudFrontDistributionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CacheBehaviors" }),
        __metadata("design:type", AwsCloudFrontDistributionCacheBehaviors)
    ], AwsCloudFrontDistributionDetails.prototype, "cacheBehaviors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultCacheBehavior" }),
        __metadata("design:type", AwsCloudFrontDistributionDefaultCacheBehavior)
    ], AwsCloudFrontDistributionDetails.prototype, "defaultCacheBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRootObject" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "defaultRootObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ETag" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "eTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Logging" }),
        __metadata("design:type", AwsCloudFrontDistributionLogging)
    ], AwsCloudFrontDistributionDetails.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginGroups" }),
        __metadata("design:type", AwsCloudFrontDistributionOriginGroups)
    ], AwsCloudFrontDistributionDetails.prototype, "originGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Origins" }),
        __metadata("design:type", AwsCloudFrontDistributionOrigins)
    ], AwsCloudFrontDistributionDetails.prototype, "origins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebAclId" }),
        __metadata("design:type", String)
    ], AwsCloudFrontDistributionDetails.prototype, "webAclId", void 0);
    return AwsCloudFrontDistributionDetails;
}(SpeakeasyBase));
export { AwsCloudFrontDistributionDetails };
