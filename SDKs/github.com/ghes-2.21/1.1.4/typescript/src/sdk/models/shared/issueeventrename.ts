import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssueEventRename
/** 
 * Issue Event Rename
**/
export class IssueEventRename extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}
