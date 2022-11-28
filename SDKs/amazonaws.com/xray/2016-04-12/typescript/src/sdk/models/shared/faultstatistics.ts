import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FaultStatistics
/** 
 * Information about requests that failed with a 5xx Server Error status code.
**/
export class FaultStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
