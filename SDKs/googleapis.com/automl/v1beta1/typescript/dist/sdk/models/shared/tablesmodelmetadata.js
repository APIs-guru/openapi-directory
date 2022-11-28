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
import { ColumnSpec } from "./columnspec";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
// TablesModelMetadata
/**
 * Model metadata specific to AutoML Tables.
**/
var TablesModelMetadata = /** @class */ (function (_super) {
    __extends(TablesModelMetadata, _super);
    function TablesModelMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableEarlyStopping" }),
        __metadata("design:type", Boolean)
    ], TablesModelMetadata.prototype, "disableEarlyStopping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputFeatureColumnSpecs", elemType: ColumnSpec }),
        __metadata("design:type", Array)
    ], TablesModelMetadata.prototype, "inputFeatureColumnSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", String)
    ], TablesModelMetadata.prototype, "optimizationObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjectivePrecisionValue" }),
        __metadata("design:type", Number)
    ], TablesModelMetadata.prototype, "optimizationObjectivePrecisionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjectiveRecallValue" }),
        __metadata("design:type", Number)
    ], TablesModelMetadata.prototype, "optimizationObjectiveRecallValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tablesModelColumnInfo", elemType: TablesModelColumnInfo }),
        __metadata("design:type", Array)
    ], TablesModelMetadata.prototype, "tablesModelColumnInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetColumnSpec" }),
        __metadata("design:type", ColumnSpec)
    ], TablesModelMetadata.prototype, "targetColumnSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainBudgetMilliNodeHours" }),
        __metadata("design:type", String)
    ], TablesModelMetadata.prototype, "trainBudgetMilliNodeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainCostMilliNodeHours" }),
        __metadata("design:type", String)
    ], TablesModelMetadata.prototype, "trainCostMilliNodeHours", void 0);
    return TablesModelMetadata;
}(SpeakeasyBase));
export { TablesModelMetadata };
