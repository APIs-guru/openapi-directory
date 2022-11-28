import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionTargetsFilterKeyEnum } from "./associationexecutiontargetsfilterkeyenum";



// AssociationExecutionTargetsFilter
/** 
 * Filters for the association execution.
**/
export class AssociationExecutionTargetsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: AssociationExecutionTargetsFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
