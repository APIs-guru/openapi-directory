import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";



// InputConfiguration
/** 
 * When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
**/
export class InputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
