import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalApplicationPolicy } from "./personalapplicationpolicy";

export enum PersonalUsagePoliciesPersonalPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED"
,    Blacklist = "BLACKLIST"
,    Blocklist = "BLOCKLIST"
,    Allowlist = "ALLOWLIST"
}


// PersonalUsagePolicies
/** 
 * Policies controlling personal usage on a company-owned device with a work profile.
**/
export class PersonalUsagePolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountTypesWithManagementDisabled" })
  accountTypesWithManagementDisabled?: string[];

  @Metadata({ data: "json, name=cameraDisabled" })
  cameraDisabled?: boolean;

  @Metadata({ data: "json, name=maxDaysWithWorkOff" })
  maxDaysWithWorkOff?: number;

  @Metadata({ data: "json, name=personalApplications", elemType: shared.PersonalApplicationPolicy })
  personalApplications?: PersonalApplicationPolicy[];

  @Metadata({ data: "json, name=personalPlayStoreMode" })
  personalPlayStoreMode?: PersonalUsagePoliciesPersonalPlayStoreModeEnum;

  @Metadata({ data: "json, name=screenCaptureDisabled" })
  screenCaptureDisabled?: boolean;
}
