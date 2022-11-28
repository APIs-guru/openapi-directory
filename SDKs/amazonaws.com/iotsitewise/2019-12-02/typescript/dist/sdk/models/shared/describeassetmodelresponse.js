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
import { AssetModelCompositeModel } from "./assetmodelcompositemodel";
import { AssetModelHierarchy } from "./assetmodelhierarchy";
import { AssetModelProperty } from "./assetmodelproperty";
import { AssetModelStatus } from "./assetmodelstatus";
var DescribeAssetModelResponse = /** @class */ (function (_super) {
    __extends(DescribeAssetModelResponse, _super);
    function DescribeAssetModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelArn" }),
        __metadata("design:type", String)
    ], DescribeAssetModelResponse.prototype, "assetModelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelCompositeModels", elemType: AssetModelCompositeModel }),
        __metadata("design:type", Array)
    ], DescribeAssetModelResponse.prototype, "assetModelCompositeModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelCreationDate" }),
        __metadata("design:type", Date)
    ], DescribeAssetModelResponse.prototype, "assetModelCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelDescription" }),
        __metadata("design:type", String)
    ], DescribeAssetModelResponse.prototype, "assetModelDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelHierarchies", elemType: AssetModelHierarchy }),
        __metadata("design:type", Array)
    ], DescribeAssetModelResponse.prototype, "assetModelHierarchies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelId" }),
        __metadata("design:type", String)
    ], DescribeAssetModelResponse.prototype, "assetModelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelLastUpdateDate" }),
        __metadata("design:type", Date)
    ], DescribeAssetModelResponse.prototype, "assetModelLastUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelName" }),
        __metadata("design:type", String)
    ], DescribeAssetModelResponse.prototype, "assetModelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelProperties", elemType: AssetModelProperty }),
        __metadata("design:type", Array)
    ], DescribeAssetModelResponse.prototype, "assetModelProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetModelStatus" }),
        __metadata("design:type", AssetModelStatus)
    ], DescribeAssetModelResponse.prototype, "assetModelStatus", void 0);
    return DescribeAssetModelResponse;
}(SpeakeasyBase));
export { DescribeAssetModelResponse };
