import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionActionEnum } from "./retentionactionenum";
import { FolderNameEnum } from "./foldernameenum";



// FolderConfiguration
/** 
 * The configuration applied to an organization's folders by its retention policy.
**/
export class FolderConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: RetentionActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: FolderNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Period" })
  period?: number;
}
