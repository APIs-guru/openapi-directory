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
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
// WorkspaceAccessProperties
/**
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
**/
var WorkspaceAccessProperties = /** @class */ (function (_super) {
    __extends(WorkspaceAccessProperties, _super);
    function WorkspaceAccessProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeAndroid" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeAndroid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeChromeOs" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeChromeOs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeIos" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeIos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeLinux" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeLinux", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeOsx" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeOsx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeWeb" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeWeb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeWindows" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeWindows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceTypeZeroClient" }),
        __metadata("design:type", String)
    ], WorkspaceAccessProperties.prototype, "deviceTypeZeroClient", void 0);
    return WorkspaceAccessProperties;
}(SpeakeasyBase));
export { WorkspaceAccessProperties };
