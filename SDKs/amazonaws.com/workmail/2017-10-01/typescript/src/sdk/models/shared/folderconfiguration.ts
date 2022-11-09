import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionActionEnum } from "./retentionactionenum";
import { FolderNameEnum } from "./foldernameenum";


// FolderConfiguration
/** 
 * The configuration applied to an organization's folders by its retention policy.
**/
export class FolderConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: RetentionActionEnum;

  @Metadata({ data: "json, name=Name" })
  name: FolderNameEnum;

  @Metadata({ data: "json, name=Period" })
  period?: number;
}
