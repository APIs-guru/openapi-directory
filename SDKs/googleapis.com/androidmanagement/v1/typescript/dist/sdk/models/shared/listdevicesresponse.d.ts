import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response to a request to list devices for a given enterprise.
**/
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: Device[];
    nextPageToken?: string;
}
