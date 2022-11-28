import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingGroupData
/** 
 * Pending group information
**/
export class PendingGroupData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
