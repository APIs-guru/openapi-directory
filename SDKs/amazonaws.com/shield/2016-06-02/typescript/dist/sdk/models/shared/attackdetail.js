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
import { SummarizedCounter } from "./summarizedcounter";
import { AttackProperty } from "./attackproperty";
import { Mitigation } from "./mitigation";
import { SubResourceSummary } from "./subresourcesummary";
// AttackDetail
/**
 * The details of a DDoS attack.
**/
var AttackDetail = /** @class */ (function (_super) {
    __extends(AttackDetail, _super);
    function AttackDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttackCounters", elemType: SummarizedCounter }),
        __metadata("design:type", Array)
    ], AttackDetail.prototype, "attackCounters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttackId" }),
        __metadata("design:type", String)
    ], AttackDetail.prototype, "attackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttackProperties", elemType: AttackProperty }),
        __metadata("design:type", Array)
    ], AttackDetail.prototype, "attackProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], AttackDetail.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mitigations", elemType: Mitigation }),
        __metadata("design:type", Array)
    ], AttackDetail.prototype, "mitigations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceArn" }),
        __metadata("design:type", String)
    ], AttackDetail.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], AttackDetail.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubResources", elemType: SubResourceSummary }),
        __metadata("design:type", Array)
    ], AttackDetail.prototype, "subResources", void 0);
    return AttackDetail;
}(SpeakeasyBase));
export { AttackDetail };
