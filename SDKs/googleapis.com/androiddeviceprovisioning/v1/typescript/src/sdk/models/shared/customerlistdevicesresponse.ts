import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// CustomerListDevicesResponse
/** 
 * Response message of customer's liting devices.
**/
export class CustomerListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
