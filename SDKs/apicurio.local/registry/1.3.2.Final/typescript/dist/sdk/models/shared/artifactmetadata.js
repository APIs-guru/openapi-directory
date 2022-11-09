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
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
var ArtifactMetaData = /** @class */ (function (_super) {
    __extends(ArtifactMetaData, _super);
    function ArtifactMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=createdOn" }),
        __metadata("design:type", Date)
    ], ArtifactMetaData.prototype, "createdOn", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=globalId" }),
        __metadata("design:type", Number)
    ], ArtifactMetaData.prototype, "globalId", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], ArtifactMetaData.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=modifiedBy" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "modifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=modifiedOn" }),
        __metadata("design:type", Date)
    ], ArtifactMetaData.prototype, "modifiedOn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], ArtifactMetaData.prototype, "properties", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ArtifactMetaData.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ArtifactMetaData.prototype, "version", void 0);
    return ArtifactMetaData;
}(SpeakeasyBase));
export { ArtifactMetaData };
