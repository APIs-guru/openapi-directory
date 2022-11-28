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
import { DkimSigningAttributesOriginEnum } from "./dkimsigningattributesoriginenum";
import { DkimStatusEnum } from "./dkimstatusenum";
// DkimAttributes
/**
 * <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
**/
var DkimAttributes = /** @class */ (function (_super) {
    __extends(DkimAttributes, _super);
    function DkimAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningAttributesOrigin" }),
        __metadata("design:type", String)
    ], DkimAttributes.prototype, "signingAttributesOrigin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningEnabled" }),
        __metadata("design:type", Boolean)
    ], DkimAttributes.prototype, "signingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DkimAttributes.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tokens" }),
        __metadata("design:type", Array)
    ], DkimAttributes.prototype, "tokens", void 0);
    return DkimAttributes;
}(SpeakeasyBase));
export { DkimAttributes };
