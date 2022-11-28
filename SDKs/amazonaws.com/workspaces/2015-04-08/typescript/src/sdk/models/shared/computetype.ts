import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnum } from "./computeenum";



// ComputeType
/** 
 * Describes the compute type of the bundle.
**/
export class ComputeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: ComputeEnum;
}
