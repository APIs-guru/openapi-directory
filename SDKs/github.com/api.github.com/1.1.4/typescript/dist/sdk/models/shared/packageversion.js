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
var PackageVersionPackageVersionMetadataContainerMetadata = /** @class */ (function (_super) {
    __extends(PackageVersionPackageVersionMetadataContainerMetadata, _super);
    function PackageVersionPackageVersionMetadataContainerMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PackageVersionPackageVersionMetadataContainerMetadata.prototype, "tags", void 0);
    return PackageVersionPackageVersionMetadataContainerMetadata;
}(SpeakeasyBase));
export { PackageVersionPackageVersionMetadataContainerMetadata };
var PackageVersionPackageVersionMetadataDockerMetadata = /** @class */ (function (_super) {
    __extends(PackageVersionPackageVersionMetadataDockerMetadata, _super);
    function PackageVersionPackageVersionMetadataDockerMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", Array)
    ], PackageVersionPackageVersionMetadataDockerMetadata.prototype, "tag", void 0);
    return PackageVersionPackageVersionMetadataDockerMetadata;
}(SpeakeasyBase));
export { PackageVersionPackageVersionMetadataDockerMetadata };
export var PackageVersionPackageVersionMetadataPackageTypeEnum;
(function (PackageVersionPackageVersionMetadataPackageTypeEnum) {
    PackageVersionPackageVersionMetadataPackageTypeEnum["Npm"] = "npm";
    PackageVersionPackageVersionMetadataPackageTypeEnum["Maven"] = "maven";
    PackageVersionPackageVersionMetadataPackageTypeEnum["Rubygems"] = "rubygems";
    PackageVersionPackageVersionMetadataPackageTypeEnum["Docker"] = "docker";
    PackageVersionPackageVersionMetadataPackageTypeEnum["Nuget"] = "nuget";
    PackageVersionPackageVersionMetadataPackageTypeEnum["Container"] = "container";
})(PackageVersionPackageVersionMetadataPackageTypeEnum || (PackageVersionPackageVersionMetadataPackageTypeEnum = {}));
var PackageVersionPackageVersionMetadata = /** @class */ (function (_super) {
    __extends(PackageVersionPackageVersionMetadata, _super);
    function PackageVersionPackageVersionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", PackageVersionPackageVersionMetadataContainerMetadata)
    ], PackageVersionPackageVersionMetadata.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=docker" }),
        __metadata("design:type", PackageVersionPackageVersionMetadataDockerMetadata)
    ], PackageVersionPackageVersionMetadata.prototype, "docker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package_type" }),
        __metadata("design:type", String)
    ], PackageVersionPackageVersionMetadata.prototype, "packageType", void 0);
    return PackageVersionPackageVersionMetadata;
}(SpeakeasyBase));
export { PackageVersionPackageVersionMetadata };
// PackageVersion
/**
 * A version of a software package
**/
var PackageVersion = /** @class */ (function (_super) {
    __extends(PackageVersion, _super);
    function PackageVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PackageVersion.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_at" }),
        __metadata("design:type", Date)
    ], PackageVersion.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PackageVersion.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PackageVersionPackageVersionMetadata)
    ], PackageVersion.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package_html_url" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "packageHtmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PackageVersion.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PackageVersion.prototype, "url", void 0);
    return PackageVersion;
}(SpeakeasyBase));
export { PackageVersion };
