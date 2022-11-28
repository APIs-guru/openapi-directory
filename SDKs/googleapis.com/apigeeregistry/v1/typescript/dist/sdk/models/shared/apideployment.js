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
// ApiDeploymentInput
/**
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
var ApiDeploymentInput = /** @class */ (function (_super) {
    __extends(ApiDeploymentInput, _super);
    function ApiDeploymentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessGuidance" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "accessGuidance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ApiDeploymentInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiSpecRevision" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "apiSpecRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointUri" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "endpointUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalChannelUri" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "externalChannelUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intendedAudience" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "intendedAudience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApiDeploymentInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiDeploymentInput.prototype, "name", void 0);
    return ApiDeploymentInput;
}(SpeakeasyBase));
export { ApiDeploymentInput };
// ApiDeployment
/**
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
var ApiDeployment = /** @class */ (function (_super) {
    __extends(ApiDeployment, _super);
    function ApiDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessGuidance" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "accessGuidance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ApiDeployment.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiSpecRevision" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "apiSpecRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointUri" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "endpointUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalChannelUri" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "externalChannelUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intendedAudience" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "intendedAudience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApiDeployment.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionUpdateTime" }),
        __metadata("design:type", String)
    ], ApiDeployment.prototype, "revisionUpdateTime", void 0);
    return ApiDeployment;
}(SpeakeasyBase));
export { ApiDeployment };
