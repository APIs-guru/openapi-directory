import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
**/
export declare class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
    domainName: string;
}
