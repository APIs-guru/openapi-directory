import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApprovalUrlInfo
/** 
 * Information on an approval URL.
**/
export class ApprovalUrlInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalUrl" })
  approvalUrl?: string;
}
