import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";



// LoadBalancerTlsCertificateDomainValidationOption
/** 
 * Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
**/
export class LoadBalancerTlsCertificateDomainValidationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=validationStatus" })
  validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;
}
