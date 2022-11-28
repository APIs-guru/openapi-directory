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
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ResourceLocation } from "./resourcelocation";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContainerServiceStateEnum } from "./containerservicestateenum";
import { ContainerServiceStateDetail } from "./containerservicestatedetail";
import { Tag } from "./tag";
// ContainerService
/**
 * Describes an Amazon Lightsail container service.
**/
var ContainerService = /** @class */ (function (_super) {
    __extends(ContainerService, _super);
    function ContainerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerServiceName" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "containerServiceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ContainerService.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentDeployment" }),
        __metadata("design:type", ContainerServiceDeployment)
    ], ContainerService.prototype, "currentDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisabled" }),
        __metadata("design:type", Boolean)
    ], ContainerService.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], ContainerService.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextDeployment" }),
        __metadata("design:type", ContainerServiceDeployment)
    ], ContainerService.prototype, "nextDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "power", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerId" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "powerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principalArn" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "principalArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateDomainName" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "privateDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicDomainNames" }),
        __metadata("design:type", Map)
    ], ContainerService.prototype, "publicDomainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scale" }),
        __metadata("design:type", Number)
    ], ContainerService.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateDetail" }),
        __metadata("design:type", ContainerServiceStateDetail)
    ], ContainerService.prototype, "stateDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ContainerService.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ContainerService.prototype, "url", void 0);
    return ContainerService;
}(SpeakeasyBase));
export { ContainerService };
