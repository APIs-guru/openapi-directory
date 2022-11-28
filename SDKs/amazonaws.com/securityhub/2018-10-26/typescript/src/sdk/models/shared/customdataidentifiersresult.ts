import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifiersDetections } from "./customdataidentifiersdetections";



// CustomDataIdentifiersResult
/** 
 * Contains an instance of sensitive data that was detected by a customer-defined identifier.
**/
export class CustomDataIdentifiersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Detections", elemType: CustomDataIdentifiersDetections })
  detections?: CustomDataIdentifiersDetections[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
