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
import { MavenRepositoryConfig } from "./mavenrepositoryconfig";
export var RepositoryFormatEnum;
(function (RepositoryFormatEnum) {
    RepositoryFormatEnum["FormatUnspecified"] = "FORMAT_UNSPECIFIED";
    RepositoryFormatEnum["Docker"] = "DOCKER";
    RepositoryFormatEnum["Maven"] = "MAVEN";
    RepositoryFormatEnum["Npm"] = "NPM";
    RepositoryFormatEnum["Apt"] = "APT";
    RepositoryFormatEnum["Yum"] = "YUM";
    RepositoryFormatEnum["Python"] = "PYTHON";
})(RepositoryFormatEnum || (RepositoryFormatEnum = {}));
// Repository
/**
 * A Repository for storing artifacts with a specific format.
**/
var Repository = /** @class */ (function (_super) {
    __extends(Repository, _super);
    function Repository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Repository.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Repository.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Repository.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], Repository.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Repository.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=mavenConfig" }),
        __metadata("design:type", MavenRepositoryConfig)
    ], Repository.prototype, "mavenConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Repository.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", String)
    ], Repository.prototype, "sizeBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Repository.prototype, "updateTime", void 0);
    return Repository;
}(SpeakeasyBase));
export { Repository };
