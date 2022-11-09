import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateShareUploadChannelRequest
/** 
 * Request model for creating an upload channel
**/
export class CreateShareUploadChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=directS3Upload" })
  directS3Upload?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
