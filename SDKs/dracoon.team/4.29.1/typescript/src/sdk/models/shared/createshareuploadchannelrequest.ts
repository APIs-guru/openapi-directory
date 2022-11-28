import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateShareUploadChannelRequest
/** 
 * Request model for creating an upload channel
**/
export class CreateShareUploadChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directS3Upload" })
  directS3Upload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
