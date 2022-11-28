import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceClaim } from "./deviceclaim";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";



// Device
/** 
 * An Android or Chrome OS device registered for zero-touch enrollment.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claims", elemType: DeviceClaim })
  claims?: DeviceClaim[];

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
