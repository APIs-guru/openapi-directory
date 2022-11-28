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
import { AddOnRequest } from "./addonrequest";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
var CreateInstancesRequest = /** @class */ (function (_super) {
    __extends(CreateInstancesRequest, _super);
    function CreateInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOnRequest }),
        __metadata("design:type", Array)
    ], CreateInstancesRequest.prototype, "addOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityZone" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueprintId" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "blueprintId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customImageName" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "customImageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceNames" }),
        __metadata("design:type", Array)
    ], CreateInstancesRequest.prototype, "instanceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddressType" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "ipAddressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPairName" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "keyPairName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateInstancesRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userData" }),
        __metadata("design:type", String)
    ], CreateInstancesRequest.prototype, "userData", void 0);
    return CreateInstancesRequest;
}(SpeakeasyBase));
export { CreateInstancesRequest };
