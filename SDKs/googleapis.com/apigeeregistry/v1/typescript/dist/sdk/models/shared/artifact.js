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
// Artifact
/**
 * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
**/
var Artifact = /** @class */ (function (_super) {
    __extends(Artifact, _super);
    function Artifact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", Number)
    ], Artifact.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Artifact.prototype, "updateTime", void 0);
    return Artifact;
}(SpeakeasyBase));
export { Artifact };
// ArtifactInput
/**
 * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
**/
var ArtifactInput = /** @class */ (function (_super) {
    __extends(ArtifactInput, _super);
    function ArtifactInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], ArtifactInput.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], ArtifactInput.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtifactInput.prototype, "name", void 0);
    return ArtifactInput;
}(SpeakeasyBase));
export { ArtifactInput };
