import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateRoomRequest
/** 
 * Request model for updating room's metadata
**/
export class UpdateRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
