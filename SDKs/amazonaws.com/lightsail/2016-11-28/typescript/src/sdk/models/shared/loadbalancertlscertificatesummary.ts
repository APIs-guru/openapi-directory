import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoadBalancerTlsCertificateSummary
/** 
 * Provides a summary of SSL/TLS certificate metadata.
**/
export class LoadBalancerTlsCertificateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
