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
import { InferenceSpecification } from "./inferencespecification";
import { Tag } from "./tag";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";
var CreateAlgorithmInput = /** @class */ (function (_super) {
    __extends(CreateAlgorithmInput, _super);
    function CreateAlgorithmInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmDescription" }),
        __metadata("design:type", String)
    ], CreateAlgorithmInput.prototype, "algorithmDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmName" }),
        __metadata("design:type", String)
    ], CreateAlgorithmInput.prototype, "algorithmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" }),
        __metadata("design:type", Boolean)
    ], CreateAlgorithmInput.prototype, "certifyForMarketplace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceSpecification" }),
        __metadata("design:type", InferenceSpecification)
    ], CreateAlgorithmInput.prototype, "inferenceSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateAlgorithmInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingSpecification" }),
        __metadata("design:type", TrainingSpecification)
    ], CreateAlgorithmInput.prototype, "trainingSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationSpecification" }),
        __metadata("design:type", AlgorithmValidationSpecification)
    ], CreateAlgorithmInput.prototype, "validationSpecification", void 0);
    return CreateAlgorithmInput;
}(SpeakeasyBase));
export { CreateAlgorithmInput };
