import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListRecordHistorySearchFilter
/** 
 * The search filter to use when listing history records.
**/
export class ListRecordHistorySearchFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
