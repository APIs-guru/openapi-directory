import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FaultStatistics
/** 
 * Information about requests that failed with a 5xx Server Error status code.
**/
export class FaultStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
