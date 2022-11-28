import { SpeakeasyBase } from "../../../internal/utils";
import { CelebrityDetail } from "./celebritydetail";
/**
 * Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
**/
export declare class CelebrityRecognition extends SpeakeasyBase {
    celebrity?: CelebrityDetail;
    timestamp?: number;
}
