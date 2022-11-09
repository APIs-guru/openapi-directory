import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";


// LoadBalancerTlsCertificateDomainValidationOption
/** 
 * Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
**/
export class LoadBalancerTlsCertificateDomainValidationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=validationStatus" })
  validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;
}
