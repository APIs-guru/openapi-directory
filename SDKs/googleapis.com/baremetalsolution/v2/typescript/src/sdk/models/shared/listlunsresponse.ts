import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Lun } from "./lun";


// ListLunsResponse
/** 
 * Response message containing the list of storage volume luns.
**/
export class ListLunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=luns", elemType: shared.Lun })
  luns?: Lun[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
