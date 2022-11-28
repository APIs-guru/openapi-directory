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
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
var DescribeFeatureGroupResponse = /** @class */ (function (_super) {
    __extends(DescribeFeatureGroupResponse, _super);
    function DescribeFeatureGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeFeatureGroupResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTimeFeatureName" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "eventTimeFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDefinitions", elemType: FeatureDefinition }),
        __metadata("design:type", Array)
    ], DescribeFeatureGroupResponse.prototype, "featureDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupArn" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "featureGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupName" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "featureGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupStatus" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "featureGroupStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfflineStoreConfig" }),
        __metadata("design:type", OfflineStoreConfig)
    ], DescribeFeatureGroupResponse.prototype, "offlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfflineStoreStatus" }),
        __metadata("design:type", OfflineStoreStatus)
    ], DescribeFeatureGroupResponse.prototype, "offlineStoreStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnlineStoreConfig" }),
        __metadata("design:type", OnlineStoreConfig)
    ], DescribeFeatureGroupResponse.prototype, "onlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordIdentifierFeatureName" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "recordIdentifierFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeFeatureGroupResponse.prototype, "roleArn", void 0);
    return DescribeFeatureGroupResponse;
}(SpeakeasyBase));
export { DescribeFeatureGroupResponse };
