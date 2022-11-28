import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionFilterKeyEnum } from "./associationexecutionfilterkeyenum";
import { AssociationFilterOperatorTypeEnum } from "./associationfilteroperatortypeenum";
/**
 * Filters used in the request.
**/
export declare class AssociationExecutionFilter extends SpeakeasyBase {
    key: AssociationExecutionFilterKeyEnum;
    type: AssociationFilterOperatorTypeEnum;
    value: string;
}
