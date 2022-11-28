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
import { VpcEndpoint } from "./vpcendpoint";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
// EndpointAccess
/**
 * Describes a Redshift-managed VPC endpoint.
**/
var EndpointAccess = /** @class */ (function (_super) {
    __extends(EndpointAccess, _super);
    function EndpointAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], EndpointAccess.prototype, "endpointCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "endpointStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointAccess.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "resourceOwner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAccess.prototype, "subnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VpcEndpoint)
    ], EndpointAccess.prototype, "vpcEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership }),
        __metadata("design:type", Array)
    ], EndpointAccess.prototype, "vpcSecurityGroups", void 0);
    return EndpointAccess;
}(SpeakeasyBase));
export { EndpointAccess };
