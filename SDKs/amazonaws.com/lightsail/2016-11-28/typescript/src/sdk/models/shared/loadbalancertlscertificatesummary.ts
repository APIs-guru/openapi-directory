import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerTlsCertificateSummary
/** 
 * Provides a summary of SSL/TLS certificate metadata.
**/
export class LoadBalancerTlsCertificateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
