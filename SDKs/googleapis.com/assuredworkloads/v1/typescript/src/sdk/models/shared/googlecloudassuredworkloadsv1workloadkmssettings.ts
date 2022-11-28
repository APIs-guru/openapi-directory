import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1WorkloadKmsSettings
/** 
 * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
**/
export class GoogleCloudAssuredworkloadsV1WorkloadKmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;
}
