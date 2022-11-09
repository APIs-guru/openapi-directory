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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { Measurement } from "./measurement";
import { Metric } from "./metric";
import { Transform } from "./transform";
// PropertyType
/**
 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
**/
var PropertyType = /** @class */ (function (_super) {
    __extends(PropertyType, _super);
    function PropertyType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attribute" }),
        __metadata("design:type", Attribute)
    ], PropertyType.prototype, "attribute", void 0);
    __decorate([
        Metadata({ data: "json, name=measurement" }),
        __metadata("design:type", Measurement)
    ], PropertyType.prototype, "measurement", void 0);
    __decorate([
        Metadata({ data: "json, name=metric" }),
        __metadata("design:type", Metric)
    ], PropertyType.prototype, "metric", void 0);
    __decorate([
        Metadata({ data: "json, name=transform" }),
        __metadata("design:type", Transform)
    ], PropertyType.prototype, "transform", void 0);
    return PropertyType;
}(SpeakeasyBase));
export { PropertyType };
