import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";


// SqlRunConfiguration
/** 
 * Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
**/
export class SqlRunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputId" })
  inputId: string;

  @Metadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
