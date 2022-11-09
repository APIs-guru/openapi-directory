import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";


// InputConfiguration
/** 
 * When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
**/
export class InputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
