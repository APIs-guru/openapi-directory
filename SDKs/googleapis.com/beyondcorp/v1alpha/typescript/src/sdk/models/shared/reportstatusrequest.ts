import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";



// ReportStatusRequest
/** 
 * Request report the connector status.
**/
export class ReportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceInfo" })
  resourceInfo?: ResourceInfo;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
