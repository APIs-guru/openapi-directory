import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
**/
export declare class EvaluationCycle extends SpeakeasyBase {
    endDate?: string;
    evaluationDate?: string;
    evaluationType?: string;
    startDate?: string;
}
