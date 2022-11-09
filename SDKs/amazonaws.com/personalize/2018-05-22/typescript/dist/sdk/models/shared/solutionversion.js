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
import { SolutionConfig } from "./solutionconfig";
import { TrainingModeEnum } from "./trainingmodeenum";
import { TunedHpoParams } from "./tunedhpoparams";
// SolutionVersion
/**
 * An object that provides information about a specific version of a <a>Solution</a>.
**/
var SolutionVersion = /** @class */ (function (_super) {
    __extends(SolutionVersion, _super);
    function SolutionVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], SolutionVersion.prototype, "creationDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=datasetGroupArn" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "datasetGroupArn", void 0);
    __decorate([
        Metadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], SolutionVersion.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=performAutoML" }),
        __metadata("design:type", Boolean)
    ], SolutionVersion.prototype, "performAutoMl", void 0);
    __decorate([
        Metadata({ data: "json, name=performHPO" }),
        __metadata("design:type", Boolean)
    ], SolutionVersion.prototype, "performHpo", void 0);
    __decorate([
        Metadata({ data: "json, name=recipeArn" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "recipeArn", void 0);
    __decorate([
        Metadata({ data: "json, name=solutionArn" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "solutionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=solutionConfig" }),
        __metadata("design:type", SolutionConfig)
    ], SolutionVersion.prototype, "solutionConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=solutionVersionArn" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "solutionVersionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=trainingHours" }),
        __metadata("design:type", Number)
    ], SolutionVersion.prototype, "trainingHours", void 0);
    __decorate([
        Metadata({ data: "json, name=trainingMode" }),
        __metadata("design:type", String)
    ], SolutionVersion.prototype, "trainingMode", void 0);
    __decorate([
        Metadata({ data: "json, name=tunedHPOParams" }),
        __metadata("design:type", TunedHpoParams)
    ], SolutionVersion.prototype, "tunedHpoParams", void 0);
    return SolutionVersion;
}(SpeakeasyBase));
export { SolutionVersion };
