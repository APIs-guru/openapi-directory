import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStartingPositionEnum } from "./inputstartingpositionenum";


// InputStartingPositionConfiguration
/** 
 * Describes the point at which the application reads from the streaming source.
**/
export class InputStartingPositionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputStartingPosition" })
  inputStartingPosition?: InputStartingPositionEnum;
}
