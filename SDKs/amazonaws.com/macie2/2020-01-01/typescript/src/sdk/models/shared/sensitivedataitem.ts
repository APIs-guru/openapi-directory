import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";
import { DefaultDetection } from "./defaultdetection";



// SensitiveDataItem
/** 
 * Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
**/
export class SensitiveDataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SensitiveDataItemCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=detections", elemType: DefaultDetection })
  detections?: DefaultDetection[];

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
