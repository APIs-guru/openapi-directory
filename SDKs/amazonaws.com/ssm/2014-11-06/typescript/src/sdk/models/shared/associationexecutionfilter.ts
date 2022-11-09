import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationExecutionFilterKeyEnum } from "./associationexecutionfilterkeyenum";
import { AssociationFilterOperatorTypeEnum } from "./associationfilteroperatortypeenum";


// AssociationExecutionFilter
/** 
 * Filters used in the request.
**/
export class AssociationExecutionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: AssociationExecutionFilterKeyEnum;

  @Metadata({ data: "json, name=Type" })
  type: AssociationFilterOperatorTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
