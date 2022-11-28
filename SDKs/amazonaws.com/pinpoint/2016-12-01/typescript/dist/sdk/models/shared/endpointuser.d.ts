import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies data for one or more attributes that describe the user who's associated with an endpoint.
**/
export declare class EndpointUser extends SpeakeasyBase {
    userAttributes?: Map<string, string[]>;
    userId?: string;
}
