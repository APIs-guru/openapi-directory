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
import { RecordError } from "./recorderror";
import { RecordTag } from "./recordtag";
import { RecordStatusEnum } from "./recordstatusenum";
// RecordDetail
/**
 * Information about a request operation.
**/
var RecordDetail = /** @class */ (function (_super) {
    __extends(RecordDetail, _super);
    function RecordDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], RecordDetail.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LaunchRoleArn" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "launchRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathId" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "pathId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "provisionedProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "provisionedProductName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedProductType" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "provisionedProductType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "provisioningArtifactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordErrors", elemType: RecordError }),
        __metadata("design:type", Array)
    ], RecordDetail.prototype, "recordErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordId" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "recordId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordTags", elemType: RecordTag }),
        __metadata("design:type", Array)
    ], RecordDetail.prototype, "recordTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordType" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "recordType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], RecordDetail.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedTime" }),
        __metadata("design:type", Date)
    ], RecordDetail.prototype, "updatedTime", void 0);
    return RecordDetail;
}(SpeakeasyBase));
export { RecordDetail };
