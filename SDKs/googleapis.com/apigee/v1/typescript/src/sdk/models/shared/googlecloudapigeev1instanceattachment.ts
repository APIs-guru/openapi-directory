import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1InstanceAttachment
/** 
 * InstanceAttachment represents the installation of an environment onto an instance.
**/
export class GoogleCloudApigeeV1InstanceAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
