import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataDetections } from "./sensitivedatadetections";



// SensitiveDataResult
/** 
 * Contains a detected instance of sensitive data that are based on built-in identifiers.
**/
export class SensitiveDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Detections", elemType: SensitiveDataDetections })
  detections?: SensitiveDataDetections[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
