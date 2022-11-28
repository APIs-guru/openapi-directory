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
export var OAuthAuthorizationUserAgentCategoryEnum;
(function (OAuthAuthorizationUserAgentCategoryEnum) {
    OAuthAuthorizationUserAgentCategoryEnum["Browser"] = "browser";
    OAuthAuthorizationUserAgentCategoryEnum["Native"] = "native";
    OAuthAuthorizationUserAgentCategoryEnum["Unknown"] = "unknown";
})(OAuthAuthorizationUserAgentCategoryEnum || (OAuthAuthorizationUserAgentCategoryEnum = {}));
// OAuthAuthorization
/**
 * OAuth authorization
**/
var OAuthAuthorization = /** @class */ (function (_super) {
    __extends(OAuthAuthorization, _super);
    function OAuthAuthorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], OAuthAuthorization.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresAt" }),
        __metadata("design:type", Date)
    ], OAuthAuthorization.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OAuthAuthorization.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isCurrentAuthorization" }),
        __metadata("design:type", Boolean)
    ], OAuthAuthorization.prototype, "isCurrentAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStandard" }),
        __metadata("design:type", Boolean)
    ], OAuthAuthorization.prototype, "isStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedAt" }),
        __metadata("design:type", Date)
    ], OAuthAuthorization.prototype, "usedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgentCategory" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "userAgentCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgentInfo" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "userAgentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgentOs" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "userAgentOs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgentType" }),
        __metadata("design:type", String)
    ], OAuthAuthorization.prototype, "userAgentType", void 0);
    return OAuthAuthorization;
}(SpeakeasyBase));
export { OAuthAuthorization };
