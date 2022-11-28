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
// S3FileLocation
/**
 * <p>Specifies the details for the file location for the file being used in the workflow. Only applicable if you are using S3 storage.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p>
**/
var S3FileLocation = /** @class */ (function (_super) {
    __extends(S3FileLocation, _super);
    function S3FileLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bucket" }),
        __metadata("design:type", String)
    ], S3FileLocation.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Etag" }),
        __metadata("design:type", String)
    ], S3FileLocation.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], S3FileLocation.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VersionId" }),
        __metadata("design:type", String)
    ], S3FileLocation.prototype, "versionId", void 0);
    return S3FileLocation;
}(SpeakeasyBase));
export { S3FileLocation };
