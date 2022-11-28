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
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentImportResource } from "./segmentimportresource";
import { SegmentGroupList } from "./segmentgrouplist";
import { SegmentTypeEnum } from "./segmenttypeenum";
// SegmentResponse
/**
 * Provides information about the configuration, dimension, and other settings for a segment.
**/
var SegmentResponse = /** @class */ (function (_super) {
    __extends(SegmentResponse, _super);
    function SegmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dimensions" }),
        __metadata("design:type", SegmentDimensions)
    ], SegmentResponse.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportDefinition" }),
        __metadata("design:type", SegmentImportResource)
    ], SegmentResponse.prototype, "importDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentGroups" }),
        __metadata("design:type", SegmentGroupList)
    ], SegmentResponse.prototype, "segmentGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentType" }),
        __metadata("design:type", String)
    ], SegmentResponse.prototype, "segmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], SegmentResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], SegmentResponse.prototype, "tags", void 0);
    return SegmentResponse;
}(SpeakeasyBase));
export { SegmentResponse };
