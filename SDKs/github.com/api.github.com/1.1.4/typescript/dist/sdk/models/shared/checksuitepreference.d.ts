import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
export declare class CheckSuitePreferencePreferencesAutoTriggerChecks extends SpeakeasyBase {
    appId: number;
    setting: boolean;
}
export declare class CheckSuitePreferencePreferences extends SpeakeasyBase {
    autoTriggerChecks?: CheckSuitePreferencePreferencesAutoTriggerChecks[];
}
/**
 * Check suite configuration preferences for a repository.
**/
export declare class CheckSuitePreference extends SpeakeasyBase {
    preferences: CheckSuitePreferencePreferences;
    repository: Repository;
}
