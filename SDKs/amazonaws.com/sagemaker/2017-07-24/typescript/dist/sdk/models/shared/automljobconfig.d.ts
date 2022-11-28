import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { AutoMlSecurityConfig } from "./automlsecurityconfig";
/**
 * A collection of settings used for an AutoML job.
**/
export declare class AutoMlJobConfig extends SpeakeasyBase {
    completionCriteria?: AutoMlJobCompletionCriteria;
    securityConfig?: AutoMlSecurityConfig;
}
