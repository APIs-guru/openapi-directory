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
import { DoubleRange } from "./doublerange";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
// TablesAnnotation
/**
 * Contains annotation details specific to Tables.
**/
var TablesAnnotation = /** @class */ (function (_super) {
    __extends(TablesAnnotation, _super);
    function TablesAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baselineScore" }),
        __metadata("design:type", Number)
    ], TablesAnnotation.prototype, "baselineScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionInterval" }),
        __metadata("design:type", DoubleRange)
    ], TablesAnnotation.prototype, "predictionInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], TablesAnnotation.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tablesModelColumnInfo", elemType: TablesModelColumnInfo }),
        __metadata("design:type", Array)
    ], TablesAnnotation.prototype, "tablesModelColumnInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], TablesAnnotation.prototype, "value", void 0);
    return TablesAnnotation;
}(SpeakeasyBase));
export { TablesAnnotation };
