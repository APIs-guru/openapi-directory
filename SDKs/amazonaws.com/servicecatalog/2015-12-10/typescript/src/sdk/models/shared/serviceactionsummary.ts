import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";



// ServiceActionSummary
/** 
 * Detailed information about the self-service action.
**/
export class ServiceActionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefinitionType" })
  definitionType?: ServiceActionDefinitionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
