import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";

export enum ClaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// ClaimDeviceRequest
/** 
 * Request message to claim a device on behalf of a customer.
**/
export class ClaimDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: ClaimDeviceRequestSectionTypeEnum;
}
