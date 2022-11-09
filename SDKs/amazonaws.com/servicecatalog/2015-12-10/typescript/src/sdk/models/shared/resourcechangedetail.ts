import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { ResourceTargetDefinition } from "./resourcetargetdefinition";


// ResourceChangeDetail
/** 
 * Information about a change to a resource attribute.
**/
export class ResourceChangeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CausingEntity" })
  causingEntity?: string;

  @Metadata({ data: "json, name=Evaluation" })
  evaluation?: EvaluationTypeEnum;

  @Metadata({ data: "json, name=Target" })
  target?: ResourceTargetDefinition;
}
