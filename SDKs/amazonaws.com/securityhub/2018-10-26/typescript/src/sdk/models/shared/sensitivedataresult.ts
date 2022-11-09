import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SensitiveDataDetections } from "./sensitivedatadetections";


// SensitiveDataResult
/** 
 * Contains a detected instance of sensitive data that are based on built-in identifiers.
**/
export class SensitiveDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=Detections", elemType: shared.SensitiveDataDetections })
  detections?: SensitiveDataDetections[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
