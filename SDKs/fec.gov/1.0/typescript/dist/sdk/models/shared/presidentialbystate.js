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
var PresidentialByState = /** @class */ (function (_super) {
    __extends(PresidentialByState, _super);
    function PresidentialByState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], PresidentialByState.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" }),
        __metadata("design:type", Number)
    ], PresidentialByState.prototype, "contributionReceiptAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_state" }),
        __metadata("design:type", String)
    ], PresidentialByState.prototype, "contributionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_year" }),
        __metadata("design:type", Number)
    ], PresidentialByState.prototype, "electionYear", void 0);
    return PresidentialByState;
}(SpeakeasyBase));
export { PresidentialByState };
