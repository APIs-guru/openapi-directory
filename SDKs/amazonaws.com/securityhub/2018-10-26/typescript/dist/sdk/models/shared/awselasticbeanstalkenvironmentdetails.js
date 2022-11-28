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
import { AwsElasticBeanstalkEnvironmentEnvironmentLink } from "./awselasticbeanstalkenvironmentenvironmentlink";
import { AwsElasticBeanstalkEnvironmentOptionSetting } from "./awselasticbeanstalkenvironmentoptionsetting";
import { AwsElasticBeanstalkEnvironmentTier } from "./awselasticbeanstalkenvironmenttier";
// AwsElasticBeanstalkEnvironmentDetails
/**
 * Contains details about an Elastic Beanstalk environment.
**/
var AwsElasticBeanstalkEnvironmentDetails = /** @class */ (function (_super) {
    __extends(AwsElasticBeanstalkEnvironmentDetails, _super);
    function AwsElasticBeanstalkEnvironmentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationName" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cname" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "cname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateCreated" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateUpdated" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointUrl" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "endpointUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentArn" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "environmentArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentId" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentLinks", elemType: AwsElasticBeanstalkEnvironmentEnvironmentLink }),
        __metadata("design:type", Array)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "environmentLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentName" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionSettings", elemType: AwsElasticBeanstalkEnvironmentOptionSetting }),
        __metadata("design:type", Array)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "optionSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformArn" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "platformArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SolutionStackName" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "solutionStackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tier" }),
        __metadata("design:type", AwsElasticBeanstalkEnvironmentTier)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VersionLabel" }),
        __metadata("design:type", String)
    ], AwsElasticBeanstalkEnvironmentDetails.prototype, "versionLabel", void 0);
    return AwsElasticBeanstalkEnvironmentDetails;
}(SpeakeasyBase));
export { AwsElasticBeanstalkEnvironmentDetails };
