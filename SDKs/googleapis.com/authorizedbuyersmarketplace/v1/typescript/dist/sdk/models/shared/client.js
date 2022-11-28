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
export var ClientRoleEnum;
(function (ClientRoleEnum) {
    ClientRoleEnum["ClientRoleUnspecified"] = "CLIENT_ROLE_UNSPECIFIED";
    ClientRoleEnum["ClientDealViewer"] = "CLIENT_DEAL_VIEWER";
    ClientRoleEnum["ClientDealNegotiator"] = "CLIENT_DEAL_NEGOTIATOR";
    ClientRoleEnum["ClientDealApprover"] = "CLIENT_DEAL_APPROVER";
})(ClientRoleEnum || (ClientRoleEnum = {}));
export var ClientStateEnum;
(function (ClientStateEnum) {
    ClientStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ClientStateEnum["Active"] = "ACTIVE";
    ClientStateEnum["Inactive"] = "INACTIVE";
})(ClientStateEnum || (ClientStateEnum = {}));
// Client
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Client.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerClientId" }),
        __metadata("design:type", String)
    ], Client.prototype, "partnerClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Client.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerVisible" }),
        __metadata("design:type", Boolean)
    ], Client.prototype, "sellerVisible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Client.prototype, "state", void 0);
    return Client;
}(SpeakeasyBase));
export { Client };
// ClientInput
/**
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
var ClientInput = /** @class */ (function (_super) {
    __extends(ClientInput, _super);
    function ClientInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ClientInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerClientId" }),
        __metadata("design:type", String)
    ], ClientInput.prototype, "partnerClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], ClientInput.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerVisible" }),
        __metadata("design:type", Boolean)
    ], ClientInput.prototype, "sellerVisible", void 0);
    return ClientInput;
}(SpeakeasyBase));
export { ClientInput };
