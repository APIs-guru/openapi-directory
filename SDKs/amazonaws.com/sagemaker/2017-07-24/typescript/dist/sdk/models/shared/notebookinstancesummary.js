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
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
// NotebookInstanceSummary
/**
 * Provides summary information for an Amazon SageMaker notebook instance.
**/
var NotebookInstanceSummary = /** @class */ (function (_super) {
    __extends(NotebookInstanceSummary, _super);
    function NotebookInstanceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" }),
        __metadata("design:type", Array)
    ], NotebookInstanceSummary.prototype, "additionalCodeRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], NotebookInstanceSummary.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "defaultCodeRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], NotebookInstanceSummary.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceArn" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "notebookInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "notebookInstanceLifecycleConfigName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "notebookInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotebookInstanceStatus" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "notebookInstanceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], NotebookInstanceSummary.prototype, "url", void 0);
    return NotebookInstanceSummary;
}(SpeakeasyBase));
export { NotebookInstanceSummary };
