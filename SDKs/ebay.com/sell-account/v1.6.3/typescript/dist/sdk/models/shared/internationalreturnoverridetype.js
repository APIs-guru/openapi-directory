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
import { TimeDuration } from "./timeduration";
// InternationalReturnOverrideType
/**
 * This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
**/
var InternationalReturnOverrideType = /** @class */ (function (_super) {
    __extends(InternationalReturnOverrideType, _super);
    function InternationalReturnOverrideType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethod" }),
        __metadata("design:type", String)
    ], InternationalReturnOverrideType.prototype, "returnMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPeriod" }),
        __metadata("design:type", TimeDuration)
    ], InternationalReturnOverrideType.prototype, "returnPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" }),
        __metadata("design:type", String)
    ], InternationalReturnOverrideType.prototype, "returnShippingCostPayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnsAccepted" }),
        __metadata("design:type", Boolean)
    ], InternationalReturnOverrideType.prototype, "returnsAccepted", void 0);
    return InternationalReturnOverrideType;
}(SpeakeasyBase));
export { InternationalReturnOverrideType };
