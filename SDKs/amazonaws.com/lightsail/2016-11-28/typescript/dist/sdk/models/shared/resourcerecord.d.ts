import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
**/
export declare class ResourceRecord extends SpeakeasyBase {
    name?: string;
    type?: string;
    value?: string;
}
