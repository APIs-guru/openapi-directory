import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
**/
export declare class AwsElasticsearchDomainDomainEndpointOptions extends SpeakeasyBase {
    enforceHttps?: boolean;
    tlsSecurityPolicy?: string;
}
