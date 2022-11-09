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
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointStatusEnum } from "./resolverendpointstatusenum";
// ResolverEndpoint
/**
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
**/
var ResolverEndpoint = /** @class */ (function (_super) {
    __extends(ResolverEndpoint, _super);
    function ResolverEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatorRequestId" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "creatorRequestId", void 0);
    __decorate([
        Metadata({ data: "json, name=Direction" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "json, name=HostVPCId" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "hostVpcId", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=IpAddressCount" }),
        __metadata("design:type", Number)
    ], ResolverEndpoint.prototype, "ipAddressCount", void 0);
    __decorate([
        Metadata({ data: "json, name=ModificationTime" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "modificationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], ResolverEndpoint.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ResolverEndpoint.prototype, "statusMessage", void 0);
    return ResolverEndpoint;
}(SpeakeasyBase));
export { ResolverEndpoint };
