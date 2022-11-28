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
export var ClientEntityTypeEnum;
(function (ClientEntityTypeEnum) {
    ClientEntityTypeEnum["EntityTypeUnspecified"] = "ENTITY_TYPE_UNSPECIFIED";
    ClientEntityTypeEnum["Advertiser"] = "ADVERTISER";
    ClientEntityTypeEnum["Brand"] = "BRAND";
    ClientEntityTypeEnum["Agency"] = "AGENCY";
    ClientEntityTypeEnum["EntityTypeUnclassified"] = "ENTITY_TYPE_UNCLASSIFIED";
})(ClientEntityTypeEnum || (ClientEntityTypeEnum = {}));
export var ClientRoleEnum;
(function (ClientRoleEnum) {
    ClientRoleEnum["ClientRoleUnspecified"] = "CLIENT_ROLE_UNSPECIFIED";
    ClientRoleEnum["ClientDealViewer"] = "CLIENT_DEAL_VIEWER";
    ClientRoleEnum["ClientDealNegotiator"] = "CLIENT_DEAL_NEGOTIATOR";
    ClientRoleEnum["ClientDealApprover"] = "CLIENT_DEAL_APPROVER";
})(ClientRoleEnum || (ClientRoleEnum = {}));
export var ClientStatusEnum;
(function (ClientStatusEnum) {
    ClientStatusEnum["ClientStatusUnspecified"] = "CLIENT_STATUS_UNSPECIFIED";
    ClientStatusEnum["Disabled"] = "DISABLED";
    ClientStatusEnum["Active"] = "ACTIVE";
})(ClientStatusEnum || (ClientStatusEnum = {}));
// Client
/**
 * A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
**/
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAccountId" }),
        __metadata("design:type", String)
    ], Client.prototype, "clientAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], Client.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityId" }),
        __metadata("design:type", String)
    ], Client.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityName" }),
        __metadata("design:type", String)
    ], Client.prototype, "entityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityType" }),
        __metadata("design:type", String)
    ], Client.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerClientId" }),
        __metadata("design:type", String)
    ], Client.prototype, "partnerClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Client.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Client.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibleToSeller" }),
        __metadata("design:type", Boolean)
    ], Client.prototype, "visibleToSeller", void 0);
    return Client;
}(SpeakeasyBase));
export { Client };
