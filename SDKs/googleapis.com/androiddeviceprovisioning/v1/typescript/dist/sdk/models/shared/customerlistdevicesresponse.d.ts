import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response message of customer's liting devices.
**/
export declare class CustomerListDevicesResponse extends SpeakeasyBase {
    devices?: Device[];
    nextPageToken?: string;
}
