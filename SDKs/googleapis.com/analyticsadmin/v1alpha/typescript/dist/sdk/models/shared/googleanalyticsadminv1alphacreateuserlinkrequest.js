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
import { GoogleAnalyticsAdminV1alphaUserLinkInput } from "./googleanalyticsadminv1alphauserlink";
// GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput
/**
 * Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
**/
var GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput, _super);
    function GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyNewUser" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput.prototype, "notifyNewUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLink" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaUserLinkInput)
    ], GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput.prototype, "userLink", void 0);
    return GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput };
