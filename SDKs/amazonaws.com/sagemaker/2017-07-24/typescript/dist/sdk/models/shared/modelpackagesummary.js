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
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
// ModelPackageSummary
/**
 * Provides summary information about a model package.
**/
var ModelPackageSummary = /** @class */ (function (_super) {
    __extends(ModelPackageSummary, _super);
    function ModelPackageSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ModelPackageSummary.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelApprovalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageArn" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelPackageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageDescription" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelPackageDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelPackageGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageName" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageStatus" }),
        __metadata("design:type", String)
    ], ModelPackageSummary.prototype, "modelPackageStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelPackageVersion" }),
        __metadata("design:type", Number)
    ], ModelPackageSummary.prototype, "modelPackageVersion", void 0);
    return ModelPackageSummary;
}(SpeakeasyBase));
export { ModelPackageSummary };
