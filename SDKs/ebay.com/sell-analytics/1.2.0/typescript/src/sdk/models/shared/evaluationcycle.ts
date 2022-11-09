import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EvaluationCycle
/** 
 * This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
**/
export class EvaluationCycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=evaluationDate" })
  evaluationDate?: string;

  @Metadata({ data: "json, name=evaluationType" })
  evaluationType?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
