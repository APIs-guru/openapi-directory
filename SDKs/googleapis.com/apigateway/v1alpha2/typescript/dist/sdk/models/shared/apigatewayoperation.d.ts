import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayStatus } from "./apigatewaystatus";
/**
 * This resource represents a long-running operation that is the result of a network API call.
**/
export declare class ApigatewayOperation extends SpeakeasyBase {
    done?: boolean;
    error?: ApigatewayStatus;
    metadata?: Map<string, any>;
    name?: string;
    response?: Map<string, any>;
}
