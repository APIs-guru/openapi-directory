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
export var ApiCoreDtoClickStreamHitDatapointInfoStatusEnum;
(function (ApiCoreDtoClickStreamHitDatapointInfoStatusEnum) {
    ApiCoreDtoClickStreamHitDatapointInfoStatusEnum["Active"] = "Active";
    ApiCoreDtoClickStreamHitDatapointInfoStatusEnum["Paused"] = "Paused";
    ApiCoreDtoClickStreamHitDatapointInfoStatusEnum["Abuse"] = "Abuse";
    ApiCoreDtoClickStreamHitDatapointInfoStatusEnum["Deleted"] = "Deleted";
})(ApiCoreDtoClickStreamHitDatapointInfoStatusEnum || (ApiCoreDtoClickStreamHitDatapointInfoStatusEnum = {}));
var ApiCoreDtoClickStreamHitDatapointInfo = /** @class */ (function (_super) {
    __extends(ApiCoreDtoClickStreamHitDatapointInfo, _super);
    function ApiCoreDtoClickStreamHitDatapointInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointFavourite" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "datapointFavourite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "datapointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "datapointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointTitle" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "datapointTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapointType" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "datapointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationUrl" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "destinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupId" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupName" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isABTest" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "isAbTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPrivateShared" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "isPrivateShared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: ApiCoreDtoTagsTag }),
        __metadata("design:type", Array)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingCode" }),
        __metadata("design:type", String)
    ], ApiCoreDtoClickStreamHitDatapointInfo.prototype, "trackingCode", void 0);
    return ApiCoreDtoClickStreamHitDatapointInfo;
}(SpeakeasyBase));
export { ApiCoreDtoClickStreamHitDatapointInfo };
