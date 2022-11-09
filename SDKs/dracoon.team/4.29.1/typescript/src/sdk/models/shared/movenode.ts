import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveNode
/** 
 * Moved node information
**/
export class MoveNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
