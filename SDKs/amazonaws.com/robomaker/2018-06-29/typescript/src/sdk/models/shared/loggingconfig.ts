import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoggingConfig
/** 
 * The logging configuration.
**/
export class LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=recordAllRosTopics" })
  recordAllRosTopics: boolean;
}
