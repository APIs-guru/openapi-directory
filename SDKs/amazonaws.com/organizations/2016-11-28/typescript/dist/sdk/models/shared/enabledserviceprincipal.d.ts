import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
**/
export declare class EnabledServicePrincipal extends SpeakeasyBase {
    dateEnabled?: Date;
    servicePrincipal?: string;
}
