import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationExecutionTargetsFilterKeyEnum } from "./associationexecutiontargetsfilterkeyenum";


// AssociationExecutionTargetsFilter
/** 
 * Filters for the association execution.
**/
export class AssociationExecutionTargetsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: AssociationExecutionTargetsFilterKeyEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
