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
// ApiSpecInput
/**
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
var ApiSpecInput = /** @class */ (function (_super) {
    __extends(ApiSpecInput, _super);
    function ApiSpecInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ApiSpecInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApiSpecInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUri" }),
        __metadata("design:type", String)
    ], ApiSpecInput.prototype, "sourceUri", void 0);
    return ApiSpecInput;
}(SpeakeasyBase));
export { ApiSpecInput };
// ApiSpec
/**
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
var ApiSpec = /** @class */ (function (_super) {
    __extends(ApiSpec, _super);
    function ApiSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ApiSpec.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApiSpec.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionUpdateTime" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "revisionUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", Number)
    ], ApiSpec.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUri" }),
        __metadata("design:type", String)
    ], ApiSpec.prototype, "sourceUri", void 0);
    return ApiSpec;
}(SpeakeasyBase));
export { ApiSpec };
