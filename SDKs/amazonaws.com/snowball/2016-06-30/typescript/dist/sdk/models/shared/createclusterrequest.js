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
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { RemoteManagementEnum } from "./remotemanagementenum";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";
var CreateClusterRequest = /** @class */ (function (_super) {
    __extends(CreateClusterRequest, _super);
    function CreateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressId" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "addressId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForwardingAddressId" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "forwardingAddressId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobType" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "jobType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyARN" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "kmsKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notification" }),
        __metadata("design:type", Notification)
    ], CreateClusterRequest.prototype, "notification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnDeviceServiceConfiguration" }),
        __metadata("design:type", OnDeviceServiceConfiguration)
    ], CreateClusterRequest.prototype, "onDeviceServiceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteManagement" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "remoteManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resources" }),
        __metadata("design:type", JobResource)
    ], CreateClusterRequest.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShippingOption" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "shippingOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnowballType" }),
        __metadata("design:type", String)
    ], CreateClusterRequest.prototype, "snowballType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxDocuments" }),
        __metadata("design:type", TaxDocuments)
    ], CreateClusterRequest.prototype, "taxDocuments", void 0);
    return CreateClusterRequest;
}(SpeakeasyBase));
export { CreateClusterRequest };
