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
import { StringHparamSearchSpace } from "./stringhparamsearchspace";
import { IntHparamSearchSpace } from "./inthparamsearchspace";
import { DoubleHparamSearchSpace } from "./doublehparamsearchspace";
import { IntArrayHparamSearchSpace } from "./intarrayhparamsearchspace";
// HparamSearchSpaces
/**
 * Hyperparameter search spaces. These should be a subset of training_options.
**/
var HparamSearchSpaces = /** @class */ (function (_super) {
    __extends(HparamSearchSpaces, _super);
    function HparamSearchSpaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationFn" }),
        __metadata("design:type", StringHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "activationFn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchSize" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boosterType" }),
        __metadata("design:type", StringHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "boosterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBylevel" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "colsampleBylevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBynode" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "colsampleBynode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBytree" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "colsampleBytree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dartNormalizeType" }),
        __metadata("design:type", StringHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "dartNormalizeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropout" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "dropout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiddenUnits" }),
        __metadata("design:type", IntArrayHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "hiddenUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l1Reg" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "l1Reg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l2Reg" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "l2Reg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnRate" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "learnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTreeDepth" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "maxTreeDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minSplitLoss" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "minSplitLoss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minTreeChildWeight" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "minTreeChildWeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numClusters" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "numClusters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numFactors" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "numFactors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numParallelTree" }),
        __metadata("design:type", IntHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "numParallelTree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizer" }),
        __metadata("design:type", StringHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "optimizer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsample" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "subsample", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treeMethod" }),
        __metadata("design:type", StringHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "treeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=walsAlpha" }),
        __metadata("design:type", DoubleHparamSearchSpace)
    ], HparamSearchSpaces.prototype, "walsAlpha", void 0);
    return HparamSearchSpaces;
}(SpeakeasyBase));
export { HparamSearchSpaces };
