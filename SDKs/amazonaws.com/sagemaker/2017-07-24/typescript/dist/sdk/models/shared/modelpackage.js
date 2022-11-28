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
import { UserContext } from "./usercontext";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
import { ModelPackageStatusDetails } from "./modelpackagestatusdetails";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";
// ModelPackage
/**
 * A versioned model that can be deployed for SageMaker inference.
**/
var ModelPackage = /** @class */ (function (_super) {
    __extends(ModelPackage, _super);
    function ModelPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovalDescription" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "approvalDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" }),
        __metadata("design:type", Boolean)
    ], ModelPackage.prototype, "certifyForMarketplace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", UserContext)
    ], ModelPackage.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ModelPackage.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceSpecification" }),
        __metadata("design:type", InferenceSpecification)
    ], ModelPackage.prototype, "inferenceSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", UserContext)
    ], ModelPackage.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], ModelPackage.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataProperties" }),
        __metadata("design:type", MetadataProperties)
    ], ModelPackage.prototype, "metadataProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelApprovalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelMetrics" }),
        __metadata("design:type", ModelMetrics)
    ], ModelPackage.prototype, "modelMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageArn" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelPackageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageDescription" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelPackageDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelPackageGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageName" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageStatus" }),
        __metadata("design:type", String)
    ], ModelPackage.prototype, "modelPackageStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageStatusDetails" }),
        __metadata("design:type", ModelPackageStatusDetails)
    ], ModelPackage.prototype, "modelPackageStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageVersion" }),
        __metadata("design:type", Number)
    ], ModelPackage.prototype, "modelPackageVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceAlgorithmSpecification" }),
        __metadata("design:type", SourceAlgorithmSpecification)
    ], ModelPackage.prototype, "sourceAlgorithmSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ModelPackage.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationSpecification" }),
        __metadata("design:type", ModelPackageValidationSpecification)
    ], ModelPackage.prototype, "validationSpecification", void 0);
    return ModelPackage;
}(SpeakeasyBase));
export { ModelPackage };
