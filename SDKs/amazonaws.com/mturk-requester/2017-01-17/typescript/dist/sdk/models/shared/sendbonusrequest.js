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
var SendBonusRequest = /** @class */ (function (_super) {
    __extends(SendBonusRequest, _super);
    function SendBonusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignmentId" }),
        __metadata("design:type", String)
    ], SendBonusRequest.prototype, "assignmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BonusAmount" }),
        __metadata("design:type", String)
    ], SendBonusRequest.prototype, "bonusAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reason" }),
        __metadata("design:type", String)
    ], SendBonusRequest.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" }),
        __metadata("design:type", String)
    ], SendBonusRequest.prototype, "uniqueRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerId" }),
        __metadata("design:type", String)
    ], SendBonusRequest.prototype, "workerId", void 0);
    return SendBonusRequest;
}(SpeakeasyBase));
export { SendBonusRequest };
