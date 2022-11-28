import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.
**/
export declare class GoogleCloudApigeeV1Quota extends SpeakeasyBase {
    interval?: string;
    limit?: string;
    timeUnit?: string;
}
