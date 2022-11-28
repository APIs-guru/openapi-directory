import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1InstanceAttachment
/** 
 * InstanceAttachment represents the installation of an environment onto an instance.
**/
export class GoogleCloudApigeeV1InstanceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudApigeeV1InstanceAttachmentInput
/** 
 * InstanceAttachment represents the installation of an environment onto an instance.
**/
export class GoogleCloudApigeeV1InstanceAttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;
}
