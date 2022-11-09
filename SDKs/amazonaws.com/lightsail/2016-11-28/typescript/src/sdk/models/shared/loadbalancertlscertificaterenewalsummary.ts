import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoadBalancerTlsCertificateDomainValidationOption } from "./loadbalancertlscertificatedomainvalidationoption";
import { LoadBalancerTlsCertificateRenewalStatusEnum } from "./loadbalancertlscertificaterenewalstatusenum";


// LoadBalancerTlsCertificateRenewalSummary
/** 
 * <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>
**/
export class LoadBalancerTlsCertificateRenewalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainValidationOptions", elemType: shared.LoadBalancerTlsCertificateDomainValidationOption })
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[];

  @Metadata({ data: "json, name=renewalStatus" })
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatusEnum;
}
