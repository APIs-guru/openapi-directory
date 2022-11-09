import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssueEventRename
/** 
 * Issue Event Rename
**/
export class IssueEventRename extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=to" })
  to: string;
}
