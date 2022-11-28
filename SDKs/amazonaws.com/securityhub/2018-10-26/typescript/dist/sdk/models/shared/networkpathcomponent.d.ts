import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkHeader } from "./networkheader";
/**
 * Information about a network path component.
**/
export declare class NetworkPathComponent extends SpeakeasyBase {
    componentId?: string;
    componentType?: string;
    egress?: NetworkHeader;
    ingress?: NetworkHeader;
}
