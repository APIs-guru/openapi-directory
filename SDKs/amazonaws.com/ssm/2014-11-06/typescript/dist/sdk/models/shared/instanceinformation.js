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
import { InstanceAggregatedAssociationOverview } from "./instanceaggregatedassociationoverview";
import { PingStatusEnum } from "./pingstatusenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
// InstanceInformation
/**
 * Describes a filter for a specific list of instances.
**/
var InstanceInformation = /** @class */ (function (_super) {
    __extends(InstanceInformation, _super);
    function InstanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivationId" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "activationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentVersion" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "agentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationOverview" }),
        __metadata("design:type", InstanceAggregatedAssociationOverview)
    ], InstanceInformation.prototype, "associationOverview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationStatus" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "associationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputerName" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "computerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IPAddress" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRole" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "iamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLatestVersion" }),
        __metadata("design:type", Boolean)
    ], InstanceInformation.prototype, "isLatestVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastAssociationExecutionDate" }),
        __metadata("design:type", Date)
    ], InstanceInformation.prototype, "lastAssociationExecutionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPingDateTime" }),
        __metadata("design:type", Date)
    ], InstanceInformation.prototype, "lastPingDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSuccessfulAssociationExecutionDate" }),
        __metadata("design:type", Date)
    ], InstanceInformation.prototype, "lastSuccessfulAssociationExecutionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PingStatus" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "pingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformName" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "platformName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformType" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "platformType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformVersion" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationDate" }),
        __metadata("design:type", Date)
    ], InstanceInformation.prototype, "registrationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType" }),
        __metadata("design:type", String)
    ], InstanceInformation.prototype, "resourceType", void 0);
    return InstanceInformation;
}(SpeakeasyBase));
export { InstanceInformation };
