import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailViewDefinitionSetting } from "./useremailviewdefinitionsetting";
/**
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
**/
export declare class UserEmailViewDefinition extends SpeakeasyBase {
    name?: string;
    viewSettings?: UserEmailViewDefinitionSetting[];
}
