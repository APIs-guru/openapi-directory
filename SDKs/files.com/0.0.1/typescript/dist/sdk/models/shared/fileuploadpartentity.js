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
// FileUploadPartEntity
/**
 * Begin file upload
**/
var FileUploadPartEntity = /** @class */ (function (_super) {
    __extends(FileUploadPartEntity, _super);
    function FileUploadPartEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ask_about_overwrites" }),
        __metadata("design:type", Boolean)
    ], FileUploadPartEntity.prototype, "askAboutOverwrites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_parts" }),
        __metadata("design:type", Number)
    ], FileUploadPartEntity.prototype, "availableParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "expires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], FileUploadPartEntity.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_partsize" }),
        __metadata("design:type", Number)
    ], FileUploadPartEntity.prototype, "nextPartsize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallel_parts" }),
        __metadata("design:type", Boolean)
    ], FileUploadPartEntity.prototype, "parallelParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], FileUploadPartEntity.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=part_number" }),
        __metadata("design:type", Number)
    ], FileUploadPartEntity.prototype, "partNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partsize" }),
        __metadata("design:type", Number)
    ], FileUploadPartEntity.prototype, "partsize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=send" }),
        __metadata("design:type", Map)
    ], FileUploadPartEntity.prototype, "send", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_uri" }),
        __metadata("design:type", String)
    ], FileUploadPartEntity.prototype, "uploadUri", void 0);
    return FileUploadPartEntity;
}(SpeakeasyBase));
export { FileUploadPartEntity };
