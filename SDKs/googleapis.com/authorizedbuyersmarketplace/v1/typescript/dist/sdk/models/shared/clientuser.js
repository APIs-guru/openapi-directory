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
export var ClientUserStateEnum;
(function (ClientUserStateEnum) {
    ClientUserStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ClientUserStateEnum["Invited"] = "INVITED";
    ClientUserStateEnum["Active"] = "ACTIVE";
    ClientUserStateEnum["Inactive"] = "INACTIVE";
})(ClientUserStateEnum || (ClientUserStateEnum = {}));
// ClientUser
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
var ClientUser = /** @class */ (function (_super) {
    __extends(ClientUser, _super);
    function ClientUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ClientUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClientUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ClientUser.prototype, "state", void 0);
    return ClientUser;
}(SpeakeasyBase));
export { ClientUser };
// ClientUserInput
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
var ClientUserInput = /** @class */ (function (_super) {
    __extends(ClientUserInput, _super);
    function ClientUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ClientUserInput.prototype, "email", void 0);
    return ClientUserInput;
}(SpeakeasyBase));
export { ClientUserInput };
