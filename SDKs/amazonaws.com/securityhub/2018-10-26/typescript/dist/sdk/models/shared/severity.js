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
import { SeverityLabelEnum } from "./severitylabelenum";
// Severity
/**
 * <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it has not been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p>
**/
var Severity = /** @class */ (function (_super) {
    __extends(Severity, _super);
    function Severity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Label" }),
        __metadata("design:type", String)
    ], Severity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Normalized" }),
        __metadata("design:type", Number)
    ], Severity.prototype, "normalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Original" }),
        __metadata("design:type", String)
    ], Severity.prototype, "original", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Product" }),
        __metadata("design:type", Number)
    ], Severity.prototype, "product", void 0);
    return Severity;
}(SpeakeasyBase));
export { Severity };
