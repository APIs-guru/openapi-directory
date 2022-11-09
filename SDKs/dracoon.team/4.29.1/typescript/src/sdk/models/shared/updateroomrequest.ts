import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateRoomRequest
/** 
 * Request model for updating room's metadata
**/
export class UpdateRoomRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=quota" })
  quota?: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
