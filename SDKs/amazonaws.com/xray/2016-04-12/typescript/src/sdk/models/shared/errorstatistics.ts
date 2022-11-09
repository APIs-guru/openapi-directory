import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorStatistics
/** 
 * Information about requests that failed with a 4xx Client Error status code.
**/
export class ErrorStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=OtherCount" })
  otherCount?: number;

  @Metadata({ data: "json, name=ThrottleCount" })
  throttleCount?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
