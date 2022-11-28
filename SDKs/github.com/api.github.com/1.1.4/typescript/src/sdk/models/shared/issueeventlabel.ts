import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssueEventLabel
/** 
 * Issue Event Label
**/
export class IssueEventLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
