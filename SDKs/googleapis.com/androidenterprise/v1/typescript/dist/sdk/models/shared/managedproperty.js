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
import { ManagedPropertyBundle } from "./managedpropertybundle";
// ManagedProperty
/**
 * A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
**/
var ManagedProperty = /** @class */ (function (_super) {
    __extends(ManagedProperty, _super);
    function ManagedProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ManagedProperty.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueBool" }),
        __metadata("design:type", Boolean)
    ], ManagedProperty.prototype, "valueBool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueBundle" }),
        __metadata("design:type", ManagedPropertyBundle)
    ], ManagedProperty.prototype, "valueBundle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueBundleArray", elemType: ManagedPropertyBundle }),
        __metadata("design:type", Array)
    ], ManagedProperty.prototype, "valueBundleArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueInteger" }),
        __metadata("design:type", Number)
    ], ManagedProperty.prototype, "valueInteger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueString" }),
        __metadata("design:type", String)
    ], ManagedProperty.prototype, "valueString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueStringArray" }),
        __metadata("design:type", Array)
    ], ManagedProperty.prototype, "valueStringArray", void 0);
    return ManagedProperty;
}(SpeakeasyBase));
export { ManagedProperty };
