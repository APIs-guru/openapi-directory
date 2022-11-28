import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EvaluationCycle
/** 
 * This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
**/
export class EvaluationCycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationDate" })
  evaluationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationType" })
  evaluationType?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
