import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
**/
export declare class AwsCorsConfiguration extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOrigins?: string[];
    exposeHeaders?: string[];
    maxAge?: number;
}
