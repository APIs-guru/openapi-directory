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
import { Tag } from "./tag";
// FeatureGroup
/**
 * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
**/
var FeatureGroup = /** @class */ (function (_super) {
    __extends(FeatureGroup, _super);
    function FeatureGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], FeatureGroup.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTimeFeatureName" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "eventTimeFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDefinitions", elemType: FeatureDefinition }),
        __metadata("design:type", Array)
    ], FeatureGroup.prototype, "featureDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupArn" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "featureGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupName" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "featureGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupStatus" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "featureGroupStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfflineStoreConfig" }),
        __metadata("design:type", OfflineStoreConfig)
    ], FeatureGroup.prototype, "offlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfflineStoreStatus" }),
        __metadata("design:type", OfflineStoreStatus)
    ], FeatureGroup.prototype, "offlineStoreStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnlineStoreConfig" }),
        __metadata("design:type", OnlineStoreConfig)
    ], FeatureGroup.prototype, "onlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordIdentifierFeatureName" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "recordIdentifierFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], FeatureGroup.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], FeatureGroup.prototype, "tags", void 0);
    return FeatureGroup;
}(SpeakeasyBase));
export { FeatureGroup };
