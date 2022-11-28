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
import { DomainEnum } from "./domainenum";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { Tag } from "./tag";
import { WorkflowDetails } from "./workflowdetails";
var CreateServerRequest = /** @class */ (function (_super) {
    __extends(CreateServerRequest, _super);
    function CreateServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Domain" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointDetails" }),
        __metadata("design:type", EndpointDetails)
    ], CreateServerRequest.prototype, "endpointDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointType" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "endpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HostKey" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "hostKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityProviderDetails" }),
        __metadata("design:type", IdentityProviderDetails)
    ], CreateServerRequest.prototype, "identityProviderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentityProviderType" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "identityProviderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingRole" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "loggingRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocols" }),
        __metadata("design:type", Array)
    ], CreateServerRequest.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" }),
        __metadata("design:type", String)
    ], CreateServerRequest.prototype, "securityPolicyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateServerRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowDetails" }),
        __metadata("design:type", WorkflowDetails)
    ], CreateServerRequest.prototype, "workflowDetails", void 0);
    return CreateServerRequest;
}(SpeakeasyBase));
export { CreateServerRequest };
