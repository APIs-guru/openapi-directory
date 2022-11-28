import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";



export class CheckSuitePreferencePreferencesAutoTriggerChecks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting: boolean;
}


export class CheckSuitePreferencePreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_trigger_checks", elemType: CheckSuitePreferencePreferencesAutoTriggerChecks })
  autoTriggerChecks?: CheckSuitePreferencePreferencesAutoTriggerChecks[];
}


// CheckSuitePreference
/** 
 * Check suite configuration preferences for a repository.
**/
export class CheckSuitePreference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences: CheckSuitePreferencePreferences;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;
}
