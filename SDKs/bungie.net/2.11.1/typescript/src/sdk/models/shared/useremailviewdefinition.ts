import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEmailViewDefinitionSetting } from "./useremailviewdefinitionsetting";



// UserEmailViewDefinition
/** 
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
**/
export class UserEmailViewDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: UserEmailViewDefinitionSetting })
  viewSettings?: UserEmailViewDefinitionSetting[];
}
