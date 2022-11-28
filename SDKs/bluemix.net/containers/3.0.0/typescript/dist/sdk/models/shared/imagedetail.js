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
var ImageDetailConfig = /** @class */ (function (_super) {
    __extends(ImageDetailConfig, _super);
    function ImageDetailConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArgsEscaped" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "argsEscaped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachStderr" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "attachStderr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachStdin" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "attachStdin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachStdout" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "attachStdout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cmd" }),
        __metadata("design:type", Array)
    ], ImageDetailConfig.prototype, "cmd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Domainmame" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "domainmame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Entrypoint" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "entrypoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Env" }),
        __metadata("design:type", Array)
    ], ImageDetailConfig.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposedPorts" }),
        __metadata("design:type", Array)
    ], ImageDetailConfig.prototype, "exposedPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hostname" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Image" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Labels" }),
        __metadata("design:type", Array)
    ], ImageDetailConfig.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnBuild" }),
        __metadata("design:type", Array)
    ], ImageDetailConfig.prototype, "onBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenStdin" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "openStdin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StdinOnce" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "stdinOnce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tty" }),
        __metadata("design:type", Boolean)
    ], ImageDetailConfig.prototype, "tty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=User" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Volumes" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkingDir" }),
        __metadata("design:type", String)
    ], ImageDetailConfig.prototype, "workingDir", void 0);
    return ImageDetailConfig;
}(SpeakeasyBase));
export { ImageDetailConfig };
var ImageDetail = /** @class */ (function (_super) {
    __extends(ImageDetail, _super);
    function ImageDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Architecture" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Config" }),
        __metadata("design:type", ImageDetailConfig)
    ], ImageDetail.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContainerConfig" }),
        __metadata("design:type", Object)
    ], ImageDetail.prototype, "containerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Created" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DockerVersion" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "dockerVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Os" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parent" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], ImageDetail.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tag" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Throwaway" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "throwaway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VirtualSize" }),
        __metadata("design:type", Number)
    ], ImageDetail.prototype, "virtualSize", void 0);
    return ImageDetail;
}(SpeakeasyBase));
export { ImageDetail };
