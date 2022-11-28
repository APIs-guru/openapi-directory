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
import { Deal } from "./deal";
import { DealPausingInfo } from "./dealpausinginfo";
import { RtbMetrics } from "./rtbmetrics";
export var FinalizedDealDealServingStatusEnum;
(function (FinalizedDealDealServingStatusEnum) {
    FinalizedDealDealServingStatusEnum["DealServingStatusUnspecified"] = "DEAL_SERVING_STATUS_UNSPECIFIED";
    FinalizedDealDealServingStatusEnum["Active"] = "ACTIVE";
    FinalizedDealDealServingStatusEnum["Ended"] = "ENDED";
    FinalizedDealDealServingStatusEnum["PausedByBuyer"] = "PAUSED_BY_BUYER";
    FinalizedDealDealServingStatusEnum["PausedBySeller"] = "PAUSED_BY_SELLER";
})(FinalizedDealDealServingStatusEnum || (FinalizedDealDealServingStatusEnum = {}));
// FinalizedDeal
/**
 * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
**/
var FinalizedDeal = /** @class */ (function (_super) {
    __extends(FinalizedDeal, _super);
    function FinalizedDeal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deal" }),
        __metadata("design:type", Deal)
    ], FinalizedDeal.prototype, "deal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealPausingInfo" }),
        __metadata("design:type", DealPausingInfo)
    ], FinalizedDeal.prototype, "dealPausingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealServingStatus" }),
        __metadata("design:type", String)
    ], FinalizedDeal.prototype, "dealServingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FinalizedDeal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readyToServe" }),
        __metadata("design:type", Boolean)
    ], FinalizedDeal.prototype, "readyToServe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rtbMetrics" }),
        __metadata("design:type", RtbMetrics)
    ], FinalizedDeal.prototype, "rtbMetrics", void 0);
    return FinalizedDeal;
}(SpeakeasyBase));
export { FinalizedDeal };
