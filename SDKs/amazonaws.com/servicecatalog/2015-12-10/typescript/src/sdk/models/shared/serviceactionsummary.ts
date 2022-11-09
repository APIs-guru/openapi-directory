import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";


// ServiceActionSummary
/** 
 * Detailed information about the self-service action.
**/
export class ServiceActionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefinitionType" })
  definitionType?: ServiceActionDefinitionTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
