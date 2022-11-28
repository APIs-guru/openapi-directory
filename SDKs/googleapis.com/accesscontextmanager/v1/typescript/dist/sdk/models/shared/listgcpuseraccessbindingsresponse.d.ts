import { SpeakeasyBase } from "../../../internal/utils";
import { GcpUserAccessBinding } from "./gcpuseraccessbinding";
/**
 * Response of ListGcpUserAccessBindings.
**/
export declare class ListGcpUserAccessBindingsResponse extends SpeakeasyBase {
    gcpUserAccessBindings?: GcpUserAccessBinding[];
    nextPageToken?: string;
}
