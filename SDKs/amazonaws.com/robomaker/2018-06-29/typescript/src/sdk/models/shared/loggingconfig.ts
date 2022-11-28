import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingConfig
/** 
 * The logging configuration.
**/
export class LoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordAllRosTopics" })
  recordAllRosTopics: boolean;
}
