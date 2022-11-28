import { SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";
import { DefaultDetection } from "./defaultdetection";
/**
 * Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
**/
export declare class SensitiveDataItem extends SpeakeasyBase {
    category?: SensitiveDataItemCategoryEnum;
    detections?: DefaultDetection[];
    totalCount?: number;
}
