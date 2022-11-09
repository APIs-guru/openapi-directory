import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repository } from "./repository";


export class CheckSuitePreferencePreferencesAutoTriggerChecks extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_id" })
  appId: number;

  @Metadata({ data: "json, name=setting" })
  setting: boolean;
}


export class CheckSuitePreferencePreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_trigger_checks", elemType: shared.CheckSuitePreferencePreferencesAutoTriggerChecks })
  autoTriggerChecks?: CheckSuitePreferencePreferencesAutoTriggerChecks[];
}


// CheckSuitePreference
/** 
 * Check suite configuration preferences for a repository.
**/
export class CheckSuitePreference extends SpeakeasyBase {
  @Metadata({ data: "json, name=preferences" })
  preferences: CheckSuitePreferencePreferences;

  @Metadata({ data: "json, name=repository" })
  repository: Repository;
}
