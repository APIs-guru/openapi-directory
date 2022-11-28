import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";



// SqlRunConfiguration
/** 
 * Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
**/
export class SqlRunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputId" })
  inputId: string;

  @SpeakeasyMetadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
