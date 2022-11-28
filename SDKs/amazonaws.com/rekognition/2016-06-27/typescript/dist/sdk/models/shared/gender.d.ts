import { SpeakeasyBase } from "../../../internal/utils";
import { GenderTypeEnum } from "./gendertypeenum";
/**
 * <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p>
**/
export declare class Gender extends SpeakeasyBase {
    confidence?: number;
    value?: GenderTypeEnum;
}
