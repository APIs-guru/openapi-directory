import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";


export enum ClaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// ClaimDeviceRequest
/** 
 * Request message to claim a device on behalf of a customer.
**/
export class ClaimDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceCustomerId" })
  googleWorkspaceCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningToken" })
  preProvisioningToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: ClaimDeviceRequestSectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=simlockProfileId" })
  simlockProfileId?: string;
}
