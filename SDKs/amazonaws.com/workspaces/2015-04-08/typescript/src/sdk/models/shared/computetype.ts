import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeEnum } from "./computeenum";


// ComputeType
/** 
 * Describes the compute type of the bundle.
**/
export class ComputeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: ComputeEnum;
}
