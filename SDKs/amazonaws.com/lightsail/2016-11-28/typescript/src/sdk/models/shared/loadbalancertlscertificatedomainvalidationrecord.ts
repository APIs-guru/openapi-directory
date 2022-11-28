import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";



// LoadBalancerTlsCertificateDomainValidationRecord
/** 
 * Describes the validation record of each domain name in the SSL/TLS certificate.
**/
export class LoadBalancerTlsCertificateDomainValidationRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=validationStatus" })
  validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
