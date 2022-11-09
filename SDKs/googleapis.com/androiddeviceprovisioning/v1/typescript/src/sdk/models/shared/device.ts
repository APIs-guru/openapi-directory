import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceClaim } from "./deviceclaim";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";


// Device
/** 
 * An Android device registered for zero-touch enrollment.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=claims", elemType: shared.DeviceClaim })
  claims?: DeviceClaim[];

  @Metadata({ data: "json, name=configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
