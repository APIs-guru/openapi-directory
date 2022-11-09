import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Resource } from "./resource";
/**
 * This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
**/
export declare class RateLimit extends SpeakeasyBase {
    apiContext?: string;
    apiName?: string;
    apiVersion?: string;
    resources?: Resource[];
}
