import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainDomainEndpointOptions
/** 
 * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
**/
export class AwsElasticsearchDomainDomainEndpointOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnforceHTTPS" })
  enforceHttps?: boolean;

  @Metadata({ data: "json, name=TLSSecurityPolicy" })
  tlsSecurityPolicy?: string;
}
