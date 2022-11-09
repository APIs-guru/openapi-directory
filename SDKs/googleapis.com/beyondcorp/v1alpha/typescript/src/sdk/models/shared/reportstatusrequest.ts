import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceInfo } from "./resourceinfo";


// ReportStatusRequest
/** 
 * Request report the connector status.
**/
export class ReportStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=resourceInfo" })
  resourceInfo?: ResourceInfo;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
