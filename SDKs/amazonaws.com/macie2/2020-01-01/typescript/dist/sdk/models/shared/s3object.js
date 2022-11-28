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
import { ServerSideEncryption } from "./serversideencryption";
import { StorageClassEnum } from "./storageclassenum";
import { KeyValuePair } from "./keyvaluepair";
// S3Object
/**
 * Provides information about the S3 object that a finding applies to.
**/
var S3Object = /** @class */ (function (_super) {
    __extends(S3Object, _super);
    function S3Object() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketArn" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "bucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eTag" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "eTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], S3Object.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAccess" }),
        __metadata("design:type", Boolean)
    ], S3Object.prototype, "publicAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverSideEncryption" }),
        __metadata("design:type", ServerSideEncryption)
    ], S3Object.prototype, "serverSideEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], S3Object.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageClass" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "storageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair }),
        __metadata("design:type", Array)
    ], S3Object.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionId" }),
        __metadata("design:type", String)
    ], S3Object.prototype, "versionId", void 0);
    return S3Object;
}(SpeakeasyBase));
export { S3Object };
