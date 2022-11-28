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
import { AssumedRole } from "./assumedrole";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";
import { FederatedUser } from "./federateduser";
import { IamUser } from "./iamuser";
import { UserIdentityRoot } from "./useridentityroot";
import { UserIdentityTypeEnum } from "./useridentitytypeenum";
// UserIdentity
/**
 * Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
**/
var UserIdentity = /** @class */ (function (_super) {
    __extends(UserIdentity, _super);
    function UserIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assumedRole" }),
        __metadata("design:type", AssumedRole)
    ], UserIdentity.prototype, "assumedRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsAccount" }),
        __metadata("design:type", AwsAccount)
    ], UserIdentity.prototype, "awsAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsService" }),
        __metadata("design:type", AwsService)
    ], UserIdentity.prototype, "awsService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedUser" }),
        __metadata("design:type", FederatedUser)
    ], UserIdentity.prototype, "federatedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamUser" }),
        __metadata("design:type", IamUser)
    ], UserIdentity.prototype, "iamUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root" }),
        __metadata("design:type", UserIdentityRoot)
    ], UserIdentity.prototype, "root", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserIdentity.prototype, "type", void 0);
    return UserIdentity;
}(SpeakeasyBase));
export { UserIdentity };
