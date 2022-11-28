import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputStartingPositionEnum } from "./inputstartingpositionenum";



// InputStartingPositionConfiguration
/** 
 * Describes the point at which the application reads from the streaming source.
**/
export class InputStartingPositionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputStartingPosition" })
  inputStartingPosition?: InputStartingPositionEnum;
}
