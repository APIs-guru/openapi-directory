import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";
import { DefaultDetection } from "./defaultdetection";


// SensitiveDataItem
/** 
 * Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
**/
export class SensitiveDataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: SensitiveDataItemCategoryEnum;

  @Metadata({ data: "json, name=detections", elemType: shared.DefaultDetection })
  detections?: DefaultDetection[];

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
