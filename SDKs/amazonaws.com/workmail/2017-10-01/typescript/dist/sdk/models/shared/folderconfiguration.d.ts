import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionActionEnum } from "./retentionactionenum";
import { FolderNameEnum } from "./foldernameenum";
/**
 * The configuration applied to an organization's folders by its retention policy.
**/
export declare class FolderConfiguration extends SpeakeasyBase {
    action: RetentionActionEnum;
    name: FolderNameEnum;
    period?: number;
}
