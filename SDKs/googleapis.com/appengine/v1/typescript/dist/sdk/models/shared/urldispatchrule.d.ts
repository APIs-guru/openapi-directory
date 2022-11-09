import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Rules to match an HTTP request and dispatch that request to a service.
**/
export declare class UrlDispatchRule extends SpeakeasyBase {
    domain?: string;
    path?: string;
    service?: string;
}
