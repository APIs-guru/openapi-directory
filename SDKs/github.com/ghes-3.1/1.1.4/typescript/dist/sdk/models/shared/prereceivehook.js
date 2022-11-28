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
var PreReceiveHookEnvironmentDownload = /** @class */ (function (_super) {
    __extends(PreReceiveHookEnvironmentDownload, _super);
    function PreReceiveHookEnvironmentDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloaded_at" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironmentDownload.prototype, "downloadedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironmentDownload.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironmentDownload.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironmentDownload.prototype, "url", void 0);
    return PreReceiveHookEnvironmentDownload;
}(SpeakeasyBase));
export { PreReceiveHookEnvironmentDownload };
var PreReceiveHookEnvironment = /** @class */ (function (_super) {
    __extends(PreReceiveHookEnvironment, _super);
    function PreReceiveHookEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_environment" }),
        __metadata("design:type", Boolean)
    ], PreReceiveHookEnvironment.prototype, "defaultEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", PreReceiveHookEnvironmentDownload)
    ], PreReceiveHookEnvironment.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks_count" }),
        __metadata("design:type", Number)
    ], PreReceiveHookEnvironment.prototype, "hooksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironment.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PreReceiveHookEnvironment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironment.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreReceiveHookEnvironment.prototype, "url", void 0);
    return PreReceiveHookEnvironment;
}(SpeakeasyBase));
export { PreReceiveHookEnvironment };
var PreReceiveHookScriptRepository = /** @class */ (function (_super) {
    __extends(PreReceiveHookScriptRepository, _super);
    function PreReceiveHookScriptRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], PreReceiveHookScriptRepository.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], PreReceiveHookScriptRepository.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PreReceiveHookScriptRepository.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreReceiveHookScriptRepository.prototype, "url", void 0);
    return PreReceiveHookScriptRepository;
}(SpeakeasyBase));
export { PreReceiveHookScriptRepository };
var PreReceiveHook = /** @class */ (function (_super) {
    __extends(PreReceiveHook, _super);
    function PreReceiveHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" }),
        __metadata("design:type", Boolean)
    ], PreReceiveHook.prototype, "allowDownstreamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcement" }),
        __metadata("design:type", String)
    ], PreReceiveHook.prototype, "enforcement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", PreReceiveHookEnvironment)
    ], PreReceiveHook.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PreReceiveHook.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PreReceiveHook.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], PreReceiveHook.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_repository" }),
        __metadata("design:type", PreReceiveHookScriptRepository)
    ], PreReceiveHook.prototype, "scriptRepository", void 0);
    return PreReceiveHook;
}(SpeakeasyBase));
export { PreReceiveHook };
