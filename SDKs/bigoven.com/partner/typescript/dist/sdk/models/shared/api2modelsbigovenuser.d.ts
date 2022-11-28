import { SpeakeasyBase } from "../../../internal/utils";
import { Api2ModelsAccounting } from "./api2modelsaccounting";
import { Api2ModelsPersonal } from "./api2modelspersonal";
import { Api2ModelsPreference } from "./api2modelspreference";
import { Api2ModelsProfile } from "./api2modelsprofile";
/**
 * An API2 wrapper object for a user
**/
export declare class Api2ModelsBigOvenUser extends SpeakeasyBase {
    accounting?: Api2ModelsAccounting;
    boAuthToken?: string;
    lastChangeLogId?: string;
    personal?: Api2ModelsPersonal;
    preferences?: Api2ModelsPreference;
    profile?: Api2ModelsProfile;
}
