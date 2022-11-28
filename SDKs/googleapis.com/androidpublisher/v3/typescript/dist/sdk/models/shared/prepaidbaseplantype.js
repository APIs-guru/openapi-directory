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
export var PrepaidBasePlanTypeTimeExtensionEnum;
(function (PrepaidBasePlanTypeTimeExtensionEnum) {
    PrepaidBasePlanTypeTimeExtensionEnum["TimeExtensionUnspecified"] = "TIME_EXTENSION_UNSPECIFIED";
    PrepaidBasePlanTypeTimeExtensionEnum["TimeExtensionActive"] = "TIME_EXTENSION_ACTIVE";
    PrepaidBasePlanTypeTimeExtensionEnum["TimeExtensionInactive"] = "TIME_EXTENSION_INACTIVE";
})(PrepaidBasePlanTypeTimeExtensionEnum || (PrepaidBasePlanTypeTimeExtensionEnum = {}));
// PrepaidBasePlanType
/**
 * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
**/
var PrepaidBasePlanType = /** @class */ (function (_super) {
    __extends(PrepaidBasePlanType, _super);
    function PrepaidBasePlanType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingPeriodDuration" }),
        __metadata("design:type", String)
    ], PrepaidBasePlanType.prototype, "billingPeriodDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeExtension" }),
        __metadata("design:type", String)
    ], PrepaidBasePlanType.prototype, "timeExtension", void 0);
    return PrepaidBasePlanType;
}(SpeakeasyBase));
export { PrepaidBasePlanType };
