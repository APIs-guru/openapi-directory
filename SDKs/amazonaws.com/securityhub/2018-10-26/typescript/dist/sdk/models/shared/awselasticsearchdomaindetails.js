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
import { AwsElasticsearchDomainDomainEndpointOptions } from "./awselasticsearchdomaindomainendpointoptions";
import { AwsElasticsearchDomainElasticsearchClusterConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigdetails";
import { AwsElasticsearchDomainEncryptionAtRestOptions } from "./awselasticsearchdomainencryptionatrestoptions";
import { AwsElasticsearchDomainLogPublishingOptions } from "./awselasticsearchdomainlogpublishingoptions";
import { AwsElasticsearchDomainNodeToNodeEncryptionOptions } from "./awselasticsearchdomainnodetonodeencryptionoptions";
import { AwsElasticsearchDomainServiceSoftwareOptions } from "./awselasticsearchdomainservicesoftwareoptions";
import { AwsElasticsearchDomainVpcOptions } from "./awselasticsearchdomainvpcoptions";
// AwsElasticsearchDomainDetails
/**
 * Information about an Amazon Elasticsearch Service domain.
**/
var AwsElasticsearchDomainDetails = /** @class */ (function (_super) {
    __extends(AwsElasticsearchDomainDetails, _super);
    function AwsElasticsearchDomainDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessPolicies" }),
        __metadata("design:type", String)
    ], AwsElasticsearchDomainDetails.prototype, "accessPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainEndpointOptions" }),
        __metadata("design:type", AwsElasticsearchDomainDomainEndpointOptions)
    ], AwsElasticsearchDomainDetails.prototype, "domainEndpointOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainId" }),
        __metadata("design:type", String)
    ], AwsElasticsearchDomainDetails.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], AwsElasticsearchDomainDetails.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchClusterConfig" }),
        __metadata("design:type", AwsElasticsearchDomainElasticsearchClusterConfigDetails)
    ], AwsElasticsearchDomainDetails.prototype, "elasticsearchClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchVersion" }),
        __metadata("design:type", String)
    ], AwsElasticsearchDomainDetails.prototype, "elasticsearchVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionAtRestOptions" }),
        __metadata("design:type", AwsElasticsearchDomainEncryptionAtRestOptions)
    ], AwsElasticsearchDomainDetails.prototype, "encryptionAtRestOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoint" }),
        __metadata("design:type", String)
    ], AwsElasticsearchDomainDetails.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoints" }),
        __metadata("design:type", Map)
    ], AwsElasticsearchDomainDetails.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogPublishingOptions" }),
        __metadata("design:type", AwsElasticsearchDomainLogPublishingOptions)
    ], AwsElasticsearchDomainDetails.prototype, "logPublishingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NodeToNodeEncryptionOptions" }),
        __metadata("design:type", AwsElasticsearchDomainNodeToNodeEncryptionOptions)
    ], AwsElasticsearchDomainDetails.prototype, "nodeToNodeEncryptionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceSoftwareOptions" }),
        __metadata("design:type", AwsElasticsearchDomainServiceSoftwareOptions)
    ], AwsElasticsearchDomainDetails.prototype, "serviceSoftwareOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VPCOptions" }),
        __metadata("design:type", AwsElasticsearchDomainVpcOptions)
    ], AwsElasticsearchDomainDetails.prototype, "vpcOptions", void 0);
    return AwsElasticsearchDomainDetails;
}(SpeakeasyBase));
export { AwsElasticsearchDomainDetails };
