import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationFilterKeyEnum } from "./associationfilterkeyenum";



// AssociationFilter
/** 
 * Describes a filter.
**/
export class AssociationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: AssociationFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
