import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListRecordHistorySearchFilter
/** 
 * The search filter to use when listing history records.
**/
export class ListRecordHistorySearchFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
