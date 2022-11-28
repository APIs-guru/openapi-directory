import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApprovalUrlInfo
/** 
 * Information on an approval URL.
**/
export class ApprovalUrlInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalUrl" })
  approvalUrl?: string;
}
