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
import { LoadBalancerTlsCertificateDomainValidationOption } from "./loadbalancertlscertificatedomainvalidationoption";
import { LoadBalancerTlsCertificateRenewalStatusEnum } from "./loadbalancertlscertificaterenewalstatusenum";
// LoadBalancerTlsCertificateRenewalSummary
/**
 * <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>
**/
var LoadBalancerTlsCertificateRenewalSummary = /** @class */ (function (_super) {
    __extends(LoadBalancerTlsCertificateRenewalSummary, _super);
    function LoadBalancerTlsCertificateRenewalSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainValidationOptions", elemType: LoadBalancerTlsCertificateDomainValidationOption }),
        __metadata("design:type", Array)
    ], LoadBalancerTlsCertificateRenewalSummary.prototype, "domainValidationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalStatus" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificateRenewalSummary.prototype, "renewalStatus", void 0);
    return LoadBalancerTlsCertificateRenewalSummary;
}(SpeakeasyBase));
export { LoadBalancerTlsCertificateRenewalSummary };
