import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an API operation that an entity invoked for an affected resource.
**/
export declare class ApiCallDetails extends SpeakeasyBase {
    api?: string;
    apiServiceName?: string;
    firstSeen?: Date;
    lastSeen?: Date;
}
