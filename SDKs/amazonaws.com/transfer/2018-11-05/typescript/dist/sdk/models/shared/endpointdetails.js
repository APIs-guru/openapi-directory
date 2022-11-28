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
// EndpointDetails
/**
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>
**/
var EndpointDetails = /** @class */ (function (_super) {
    __extends(EndpointDetails, _super);
    function EndpointDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressAllocationIds" }),
        __metadata("design:type", Array)
    ], EndpointDetails.prototype, "addressAllocationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], EndpointDetails.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], EndpointDetails.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcEndpointId" }),
        __metadata("design:type", String)
    ], EndpointDetails.prototype, "vpcEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], EndpointDetails.prototype, "vpcId", void 0);
    return EndpointDetails;
}(SpeakeasyBase));
export { EndpointDetails };
