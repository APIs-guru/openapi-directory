import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionFilterKeyEnum } from "./associationexecutionfilterkeyenum";
import { AssociationFilterOperatorTypeEnum } from "./associationfilteroperatortypeenum";



// AssociationExecutionFilter
/** 
 * Filters used in the request.
**/
export class AssociationExecutionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: AssociationExecutionFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: AssociationFilterOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
