import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { ResourceTargetDefinition } from "./resourcetargetdefinition";



// ResourceChangeDetail
/** 
 * Information about a change to a resource attribute.
**/
export class ResourceChangeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CausingEntity" })
  causingEntity?: string;

  @SpeakeasyMetadata({ data: "json, name=Evaluation" })
  evaluation?: EvaluationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: ResourceTargetDefinition;
}
