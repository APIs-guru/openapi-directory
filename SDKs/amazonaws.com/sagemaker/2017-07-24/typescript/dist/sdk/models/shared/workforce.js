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
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfigForResponse } from "./oidcconfigforresponse";
import { SourceIpConfig } from "./sourceipconfig";
// Workforce
/**
 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
**/
var Workforce = /** @class */ (function (_super) {
    __extends(Workforce, _super);
    function Workforce() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CognitoConfig" }),
        __metadata("design:type", CognitoConfig)
    ], Workforce.prototype, "cognitoConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateDate" }),
        __metadata("design:type", Date)
    ], Workforce.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" }),
        __metadata("design:type", Date)
    ], Workforce.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OidcConfig" }),
        __metadata("design:type", OidcConfigForResponse)
    ], Workforce.prototype, "oidcConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceIpConfig" }),
        __metadata("design:type", SourceIpConfig)
    ], Workforce.prototype, "sourceIpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubDomain" }),
        __metadata("design:type", String)
    ], Workforce.prototype, "subDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkforceArn" }),
        __metadata("design:type", String)
    ], Workforce.prototype, "workforceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkforceName" }),
        __metadata("design:type", String)
    ], Workforce.prototype, "workforceName", void 0);
    return Workforce;
}(SpeakeasyBase));
export { Workforce };
