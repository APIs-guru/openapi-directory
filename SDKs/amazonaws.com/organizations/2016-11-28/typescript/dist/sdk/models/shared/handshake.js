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
import { ActionTypeEnum } from "./actiontypeenum";
import { HandshakeParty } from "./handshakeparty";
import { HandshakeResource } from "./handshakeresource";
import { HandshakeStateEnum } from "./handshakestateenum";
// Handshake
/**
 * <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, or <code>DECLINED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>
**/
var Handshake = /** @class */ (function (_super) {
    __extends(Handshake, _super);
    function Handshake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], Handshake.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], Handshake.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationTimestamp" }),
        __metadata("design:type", Date)
    ], Handshake.prototype, "expirationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Handshake.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parties", elemType: HandshakeParty }),
        __metadata("design:type", Array)
    ], Handshake.prototype, "parties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedTimestamp" }),
        __metadata("design:type", Date)
    ], Handshake.prototype, "requestedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resources", elemType: HandshakeResource }),
        __metadata("design:type", Array)
    ], Handshake.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Handshake.prototype, "state", void 0);
    return Handshake;
}(SpeakeasyBase));
export { Handshake };
