import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { AutoMlSecurityConfig } from "./automlsecurityconfig";



// AutoMlJobConfig
/** 
 * A collection of settings used for an AutoML job.
**/
export class AutoMlJobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletionCriteria" })
  completionCriteria?: AutoMlJobCompletionCriteria;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfig" })
  securityConfig?: AutoMlSecurityConfig;
}
