import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDataIdentifiersDetections } from "./customdataidentifiersdetections";


// CustomDataIdentifiersResult
/** 
 * Contains an instance of sensitive data that was detected by a customer-defined identifier.
**/
export class CustomDataIdentifiersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Detections", elemType: shared.CustomDataIdentifiersDetections })
  detections?: CustomDataIdentifiersDetections[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
