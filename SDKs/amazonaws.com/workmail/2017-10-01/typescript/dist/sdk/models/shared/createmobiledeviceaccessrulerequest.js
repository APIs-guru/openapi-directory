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
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
var CreateMobileDeviceAccessRuleRequest = /** @class */ (function (_super) {
    __extends(CreateMobileDeviceAccessRuleRequest, _super);
    function CreateMobileDeviceAccessRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=DeviceModels" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "deviceModels", void 0);
    __decorate([
        Metadata({ data: "json, name=DeviceOperatingSystems" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "deviceOperatingSystems", void 0);
    __decorate([
        Metadata({ data: "json, name=DeviceTypes" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "deviceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=DeviceUserAgents" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "deviceUserAgents", void 0);
    __decorate([
        Metadata({ data: "json, name=Effect" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "effect", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=NotDeviceModels" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "notDeviceModels", void 0);
    __decorate([
        Metadata({ data: "json, name=NotDeviceOperatingSystems" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "notDeviceOperatingSystems", void 0);
    __decorate([
        Metadata({ data: "json, name=NotDeviceTypes" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "notDeviceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=NotDeviceUserAgents" }),
        __metadata("design:type", Array)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "notDeviceUserAgents", void 0);
    __decorate([
        Metadata({ data: "json, name=OrganizationId" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "organizationId", void 0);
    return CreateMobileDeviceAccessRuleRequest;
}(SpeakeasyBase));
export { CreateMobileDeviceAccessRuleRequest };
