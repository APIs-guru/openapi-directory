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
import { ChefConfiguration } from "./chefconfiguration";
import { StackConfigurationManager } from "./stackconfigurationmanager";
import { Source } from "./source";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
var CloneStackRequest = /** @class */ (function (_super) {
    __extends(CloneStackRequest, _super);
    function CloneStackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentVersion" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "agentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], CloneStackRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChefConfiguration" }),
        __metadata("design:type", ChefConfiguration)
    ], CloneStackRequest.prototype, "chefConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloneAppIds" }),
        __metadata("design:type", Array)
    ], CloneStackRequest.prototype, "cloneAppIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonePermissions" }),
        __metadata("design:type", Boolean)
    ], CloneStackRequest.prototype, "clonePermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationManager" }),
        __metadata("design:type", StackConfigurationManager)
    ], CloneStackRequest.prototype, "configurationManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomCookbooksSource" }),
        __metadata("design:type", Source)
    ], CloneStackRequest.prototype, "customCookbooksSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomJson" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "customJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAvailabilityZone" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultInstanceProfileArn" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultInstanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultOs" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultOs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultRootDeviceType" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultRootDeviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSshKeyName" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultSshKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubnetId" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "defaultSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HostnameTheme" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "hostnameTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceStackId" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "sourceStackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseCustomCookbooks" }),
        __metadata("design:type", Boolean)
    ], CloneStackRequest.prototype, "useCustomCookbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseOpsworksSecurityGroups" }),
        __metadata("design:type", Boolean)
    ], CloneStackRequest.prototype, "useOpsworksSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], CloneStackRequest.prototype, "vpcId", void 0);
    return CloneStackRequest;
}(SpeakeasyBase));
export { CloneStackRequest };
