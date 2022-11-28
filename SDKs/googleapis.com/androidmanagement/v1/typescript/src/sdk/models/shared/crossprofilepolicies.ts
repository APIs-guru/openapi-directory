import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CrossProfilePoliciesCrossProfileCopyPasteEnum {
    CrossProfileCopyPasteUnspecified = "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
    CopyFromWorkToPersonalDisallowed = "COPY_FROM_WORK_TO_PERSONAL_DISALLOWED",
    CrossProfileCopyPasteAllowed = "CROSS_PROFILE_COPY_PASTE_ALLOWED"
}

export enum CrossProfilePoliciesCrossProfileDataSharingEnum {
    CrossProfileDataSharingUnspecified = "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
    CrossProfileDataSharingDisallowed = "CROSS_PROFILE_DATA_SHARING_DISALLOWED",
    DataSharingFromWorkToPersonalDisallowed = "DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED",
    CrossProfileDataSharingAllowed = "CROSS_PROFILE_DATA_SHARING_ALLOWED"
}

export enum CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum {
    ShowWorkContactsInPersonalProfileUnspecified = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
    ShowWorkContactsInPersonalProfileDisallowed = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED",
    ShowWorkContactsInPersonalProfileAllowed = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED"
}


// CrossProfilePolicies
/** 
 * Cross-profile policies applied on the device.
**/
export class CrossProfilePolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crossProfileCopyPaste" })
  crossProfileCopyPaste?: CrossProfilePoliciesCrossProfileCopyPasteEnum;

  @SpeakeasyMetadata({ data: "json, name=crossProfileDataSharing" })
  crossProfileDataSharing?: CrossProfilePoliciesCrossProfileDataSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=showWorkContactsInPersonalProfile" })
  showWorkContactsInPersonalProfile?: CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum;
}
