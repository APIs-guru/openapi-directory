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
import { TargetDeviceEnum } from "./targetdeviceenum";
import { TargetPlatform } from "./targetplatform";
// OutputConfig
/**
 * Contains information about the output location for the compiled model and the target device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code> are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the platform of your edge device and <code>CompilerOptions</code> if there are specific settings that are required or recommended to use for particular TargetPlatform.
**/
var OutputConfig = /** @class */ (function (_super) {
    __extends(OutputConfig, _super);
    function OutputConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompilerOptions" }),
        __metadata("design:type", String)
    ], OutputConfig.prototype, "compilerOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], OutputConfig.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3OutputLocation" }),
        __metadata("design:type", String)
    ], OutputConfig.prototype, "s3OutputLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetDevice" }),
        __metadata("design:type", String)
    ], OutputConfig.prototype, "targetDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetPlatform" }),
        __metadata("design:type", TargetPlatform)
    ], OutputConfig.prototype, "targetPlatform", void 0);
    return OutputConfig;
}(SpeakeasyBase));
export { OutputConfig };
