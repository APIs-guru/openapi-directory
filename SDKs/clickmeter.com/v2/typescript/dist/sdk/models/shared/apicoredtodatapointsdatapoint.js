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
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
import { ApiCoreDtoDatapointsTrackingLinkSpecifics } from "./apicoredtodatapointstrackinglinkspecifics";
import { ApiCoreDtoDatapointsTrackingPixelSpecifics } from "./apicoredtodatapointstrackingpixelspecifics";
export var ApiCoreDtoDatapointsDatapointStatusEnum;
(function (ApiCoreDtoDatapointsDatapointStatusEnum) {
    ApiCoreDtoDatapointsDatapointStatusEnum["Active"] = "Active";
    ApiCoreDtoDatapointsDatapointStatusEnum["Paused"] = "Paused";
    ApiCoreDtoDatapointsDatapointStatusEnum["Abuse"] = "Abuse";
    ApiCoreDtoDatapointsDatapointStatusEnum["Deleted"] = "Deleted";
})(ApiCoreDtoDatapointsDatapointStatusEnum || (ApiCoreDtoDatapointsDatapointStatusEnum = {}));
export var ApiCoreDtoDatapointsDatapointTypeEnum;
(function (ApiCoreDtoDatapointsDatapointTypeEnum) {
    ApiCoreDtoDatapointsDatapointTypeEnum["TrackingLink"] = "TrackingLink";
    ApiCoreDtoDatapointsDatapointTypeEnum["TrackingPixel"] = "TrackingPixel";
})(ApiCoreDtoDatapointsDatapointTypeEnum || (ApiCoreDtoDatapointsDatapointTypeEnum = {}));
var ApiCoreDtoDatapointsDatapoint = /** @class */ (function (_super) {
    __extends(ApiCoreDtoDatapointsDatapoint, _super);
    function ApiCoreDtoDatapointsDatapoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encodeIp" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "encodeIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fifthConversionId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "fifthConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fifthConversionName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "fifthConversionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstConversionId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "firstConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstConversionName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "firstConversionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fourthConversionId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "fourthConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fourthConversionName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "fourthConversionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSecured" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "isSecured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lightTracking" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "lightTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "preferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectOnly" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "redirectOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondConversionId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "secondConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondConversionName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "secondConversionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: ApiCoreDtoTagsTag }),
        __metadata("design:type", Array)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdConversionId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "thirdConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdConversionName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "thirdConversionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingCode" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "trackingCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeTL" }),
        __metadata("design:type", ApiCoreDtoDatapointsTrackingLinkSpecifics)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "typeTl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeTP" }),
        __metadata("design:type", ApiCoreDtoDatapointsTrackingPixelSpecifics)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "typeTp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writePermited" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoDatapointsDatapoint.prototype, "writePermited", void 0);
    return ApiCoreDtoDatapointsDatapoint;
}(SpeakeasyBase));
export { ApiCoreDtoDatapointsDatapoint };
