import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationFilterKeyEnum } from "./associationfilterkeyenum";


// AssociationFilter
/** 
 * Describes a filter.
**/
export class AssociationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: AssociationFilterKeyEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
