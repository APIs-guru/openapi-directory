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
import { ApiCoreDtoDatapointsBrowserBaseDestinationItem } from "./apicoredtodatapointsbrowserbasedestinationitem";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsDatapointRetargetingInfo } from "./apicoredtodatapointsdatapointretargetinginfo";
import { ApiCoreDtoDatapointsUniqueDestinationItem } from "./apicoredtodatapointsuniquedestinationitem";
import { ApiCoreDtoDatapointsUrlByLanguageItem } from "./apicoredtodatapointsurlbylanguageitem";
import { ApiCoreDtoDatapointsUrlByNationItem } from "./apicoredtodatapointsurlbynationitem";
import { ApiCoreDtoDatapointsWeightedDestinationItem } from "./apicoredtodatapointsweighteddestinationitem";
export var ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
(function (ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum) {
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["Simple"] = "Simple";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["RandomDestination"] = "RandomDestination";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["DestinationByLanguage"] = "DestinationByLanguage";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["SpilloverDestination"] = "SpilloverDestination";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["DynamicUrl"] = "DynamicUrl";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["BrowserDestination"] = "BrowserDestination";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["DestinationByNation"] = "DestinationByNation";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["UniqueDestination"] = "UniqueDestination";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["SequentialDestination"] = "SequentialDestination";
    ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum["WeightedDestination"] = "WeightedDestination";
})(ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum || (ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = {}));
export var ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
(function (ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum) {
    ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum["PermanentRedirect"] = "PermanentRedirect";
    ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum["TemporaryRedirect"] = "TemporaryRedirect";
})(ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum || (ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum = {}));
export var ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
(function (ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum) {
    ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum["None"] = "None";
    ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum["Clean"] = "Clean";
    ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum["Myself"] = "Myself";
})(ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum || (ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum = {}));
var ApiCoreDtoDatapointsTrackingLinkSpecifics = /** @class */ (function (_super) {
    __extends(ApiCoreDtoDatapointsTrackingLinkSpecifics, _super);
    function ApiCoreDtoDatapointsTrackingLinkSpecifics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appendQuery" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "appendQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserDestinationItem" }),
        __metadata("design:type", ApiCoreDtoDatapointsBrowserBaseDestinationItem)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "browserDestinationItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationMode" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "destinationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encodeUrl" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "encodeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationClicks" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "expirationClicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstUrl" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "firstUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goDomainId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "goDomainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideUrl" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "hideUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideUrlTitle" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "hideUrlTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isABTest" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "isAbTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pauseAfterClicksExpiration" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "pauseAfterClicksExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pauseAfterDateExpiration" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "pauseAfterDateExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=randomDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "randomDestinationItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectType" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "redirectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerClean" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "referrerClean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scripts", elemType: ApiCoreDtoDatapointsDatapointRetargetingInfo }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "scripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequentialDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "sequentialDestinationItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spilloverDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "spilloverDestinationItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueDestinationItem" }),
        __metadata("design:type", ApiCoreDtoDatapointsUniqueDestinationItem)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "uniqueDestinationItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlAfterClicksExpiration" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "urlAfterClicksExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlAfterDateExpiration" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "urlAfterDateExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlsByLanguage", elemType: ApiCoreDtoDatapointsUrlByLanguageItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "urlsByLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlsByNation", elemType: ApiCoreDtoDatapointsUrlByNationItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "urlsByNation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightedDestinationItems", elemType: ApiCoreDtoDatapointsWeightedDestinationItem }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsTrackingLinkSpecifics.prototype, "weightedDestinationItems", void 0);
    return ApiCoreDtoDatapointsTrackingLinkSpecifics;
}(SpeakeasyBase));
export { ApiCoreDtoDatapointsTrackingLinkSpecifics };
