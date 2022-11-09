import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Api2ModelsAccounting } from "./api2modelsaccounting";
import { Api2ModelsPersonal } from "./api2modelspersonal";
import { Api2ModelsPreference } from "./api2modelspreference";
import { Api2ModelsProfile } from "./api2modelsprofile";


// Api2ModelsBigOvenUser
/** 
 * An API2 wrapper object for a user
**/
export class Api2ModelsBigOvenUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accounting, form, name=Accounting;" })
  accounting?: Api2ModelsAccounting;

  @Metadata({ data: "json, name=BOAuthToken, form, name=BOAuthToken;" })
  boAuthToken?: string;

  @Metadata({ data: "json, name=LastChangeLogID, form, name=LastChangeLogID;" })
  lastChangeLogId?: string;

  @Metadata({ data: "json, name=Personal, form, name=Personal;" })
  personal?: Api2ModelsPersonal;

  @Metadata({ data: "json, name=Preferences, form, name=Preferences;" })
  preferences?: Api2ModelsPreference;

  @Metadata({ data: "json, name=Profile, form, name=Profile;" })
  profile?: Api2ModelsProfile;
}
