import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorStatistics
/** 
 * Information about requests that failed with a 4xx Client Error status code.
**/
export class ErrorStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ThrottleCount" })
  throttleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
