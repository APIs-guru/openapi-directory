import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainDomainEndpointOptions
/** 
 * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
**/
export class AwsElasticsearchDomainDomainEndpointOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnforceHTTPS" })
  enforceHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TLSSecurityPolicy" })
  tlsSecurityPolicy?: string;
}
