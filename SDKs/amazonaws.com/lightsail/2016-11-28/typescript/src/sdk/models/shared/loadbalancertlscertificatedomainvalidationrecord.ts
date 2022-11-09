import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";


// LoadBalancerTlsCertificateDomainValidationRecord
/** 
 * Describes the validation record of each domain name in the SSL/TLS certificate.
**/
export class LoadBalancerTlsCertificateDomainValidationRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=validationStatus" })
  validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
