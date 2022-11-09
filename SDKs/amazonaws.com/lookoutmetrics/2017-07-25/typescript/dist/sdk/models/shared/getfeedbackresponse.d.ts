import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSeriesFeedback } from "./timeseriesfeedback";
export declare class GetFeedbackResponse extends SpeakeasyBase {
    anomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];
    nextToken?: string;
}
