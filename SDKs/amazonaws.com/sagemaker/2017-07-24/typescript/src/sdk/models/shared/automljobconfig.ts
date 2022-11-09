import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { AutoMlSecurityConfig } from "./automlsecurityconfig";


// AutoMlJobConfig
/** 
 * A collection of settings used for an AutoML job.
**/
export class AutoMlJobConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletionCriteria" })
  completionCriteria?: AutoMlJobCompletionCriteria;

  @Metadata({ data: "json, name=SecurityConfig" })
  securityConfig?: AutoMlSecurityConfig;
}
