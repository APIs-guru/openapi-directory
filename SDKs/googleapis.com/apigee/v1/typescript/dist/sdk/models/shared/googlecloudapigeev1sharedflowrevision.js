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
import { GoogleCloudApigeeV1ConfigVersion } from "./googlecloudapigeev1configversion";
import { GoogleCloudApigeeV1ResourceFiles } from "./googlecloudapigeev1resourcefiles";
// GoogleCloudApigeeV1SharedFlowRevision
/**
 * The metadata describing a shared flow revision.
**/
var GoogleCloudApigeeV1SharedFlowRevision = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1SharedFlowRevision, _super);
    function GoogleCloudApigeeV1SharedFlowRevision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationVersion" }),
        __metadata("design:type", GoogleCloudApigeeV1ConfigVersion)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "configurationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextInfo" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "contextInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityMetaDataAsProperties" }),
        __metadata("design:type", Map)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "entityMetaDataAsProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceFiles" }),
        __metadata("design:type", GoogleCloudApigeeV1ResourceFiles)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "resourceFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedFlows" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "sharedFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1SharedFlowRevision.prototype, "type", void 0);
    return GoogleCloudApigeeV1SharedFlowRevision;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1SharedFlowRevision };
