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
// NestedParameter
/**
 * JSON template for a parameter used in various reports.
**/
var NestedParameter = /** @class */ (function (_super) {
    __extends(NestedParameter, _super);
    function NestedParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolValue" }),
        __metadata("design:type", Boolean)
    ], NestedParameter.prototype, "boolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], NestedParameter.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiBoolValue" }),
        __metadata("design:type", Array)
    ], NestedParameter.prototype, "multiBoolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiIntValue" }),
        __metadata("design:type", Array)
    ], NestedParameter.prototype, "multiIntValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiValue" }),
        __metadata("design:type", Array)
    ], NestedParameter.prototype, "multiValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NestedParameter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], NestedParameter.prototype, "value", void 0);
    return NestedParameter;
}(SpeakeasyBase));
export { NestedParameter };
