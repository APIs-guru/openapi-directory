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
import { BqmlTrainingRun } from "./bqmltrainingrun";
// ModelDefinitionModelOptions
/**
 * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
**/
var ModelDefinitionModelOptions = /** @class */ (function (_super) {
    __extends(ModelDefinitionModelOptions, _super);
    function ModelDefinitionModelOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], ModelDefinitionModelOptions.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lossType" }),
        __metadata("design:type", String)
    ], ModelDefinitionModelOptions.prototype, "lossType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelType" }),
        __metadata("design:type", String)
    ], ModelDefinitionModelOptions.prototype, "modelType", void 0);
    return ModelDefinitionModelOptions;
}(SpeakeasyBase));
export { ModelDefinitionModelOptions };
var ModelDefinition = /** @class */ (function (_super) {
    __extends(ModelDefinition, _super);
    function ModelDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelOptions" }),
        __metadata("design:type", ModelDefinitionModelOptions)
    ], ModelDefinition.prototype, "modelOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: BqmlTrainingRun }),
        __metadata("design:type", Array)
    ], ModelDefinition.prototype, "trainingRuns", void 0);
    return ModelDefinition;
}(SpeakeasyBase));
export { ModelDefinition };
