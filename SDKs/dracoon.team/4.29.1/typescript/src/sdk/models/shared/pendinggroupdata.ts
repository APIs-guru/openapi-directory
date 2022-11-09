import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingGroupData
/** 
 * Pending group information
**/
export class PendingGroupData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
