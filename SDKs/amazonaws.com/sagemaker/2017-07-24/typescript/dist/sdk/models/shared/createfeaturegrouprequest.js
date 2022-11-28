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
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OnlineStoreConfig } from "./onlinestoreconfig";
import { Tag } from "./tag";
var CreateFeatureGroupRequest = /** @class */ (function (_super) {
    __extends(CreateFeatureGroupRequest, _super);
    function CreateFeatureGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateFeatureGroupRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTimeFeatureName" }),
        __metadata("design:type", String)
    ], CreateFeatureGroupRequest.prototype, "eventTimeFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDefinitions", elemType: FeatureDefinition }),
        __metadata("design:type", Array)
    ], CreateFeatureGroupRequest.prototype, "featureDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureGroupName" }),
        __metadata("design:type", String)
    ], CreateFeatureGroupRequest.prototype, "featureGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OfflineStoreConfig" }),
        __metadata("design:type", OfflineStoreConfig)
    ], CreateFeatureGroupRequest.prototype, "offlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnlineStoreConfig" }),
        __metadata("design:type", OnlineStoreConfig)
    ], CreateFeatureGroupRequest.prototype, "onlineStoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordIdentifierFeatureName" }),
        __metadata("design:type", String)
    ], CreateFeatureGroupRequest.prototype, "recordIdentifierFeatureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], CreateFeatureGroupRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateFeatureGroupRequest.prototype, "tags", void 0);
    return CreateFeatureGroupRequest;
}(SpeakeasyBase));
export { CreateFeatureGroupRequest };
