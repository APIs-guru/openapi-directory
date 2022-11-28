import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lun } from "./lun";



// ListLunsResponse
/** 
 * Response message containing the list of storage volume luns.
**/
export class ListLunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=luns", elemType: Lun })
  luns?: Lun[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
