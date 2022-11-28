import { SpeakeasyBase } from "../../../internal/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";
export declare class PersonDescription extends SpeakeasyBase {
    content?: string;
}
export declare class PersonDisableKeyboardShortcuts extends SpeakeasyBase {
    content?: string;
}
export declare class PersonLocation extends SpeakeasyBase {
    content?: string;
}
export declare class PersonMboxSha1sum extends SpeakeasyBase {
    content?: string;
}
export declare class PersonMobileurl extends SpeakeasyBase {
    content?: string;
}
export declare class PersonPhotosCount extends SpeakeasyBase {
    content?: string;
}
export declare class PersonPhotosFirstdate extends SpeakeasyBase {
    content?: string;
}
export declare class PersonPhotosFirstdatetaken extends SpeakeasyBase {
    content?: string;
}
export declare class PersonPhotosViews extends SpeakeasyBase {
    content?: string;
}
export declare class PersonPhotos extends SpeakeasyBase {
    count?: PersonPhotosCount;
    firstdate?: PersonPhotosFirstdate;
    firstdatetaken?: PersonPhotosFirstdatetaken;
    views?: PersonPhotosViews;
}
export declare class PersonPhotosurl extends SpeakeasyBase {
    content?: string;
}
export declare class PersonProfileurl extends SpeakeasyBase {
    content?: string;
}
export declare class PersonRealname extends SpeakeasyBase {
    content?: string;
}
export declare class PersonTimezone extends SpeakeasyBase {
    label?: string;
    offset?: string;
    timezoneId?: string;
}
export declare class PersonUnreadMessages extends SpeakeasyBase {
    content?: string;
}
export declare class PersonUsername extends SpeakeasyBase {
    content?: string;
}
export declare class Person extends SpeakeasyBase {
    canBuyPro?: boolean;
    cover?: Cover;
    coverphoto?: PhotoUrLs;
    coverphotoFarm?: string;
    coverphotoServer?: string;
    description?: PersonDescription;
    disableKeyboardShortcuts?: PersonDisableKeyboardShortcuts;
    expire?: boolean;
    hasStats?: boolean;
    iconfarm?: string;
    iconserver?: string;
    id?: string;
    isAdFree?: boolean;
    ispro?: boolean;
    location?: PersonLocation;
    mboxSha1sum?: PersonMboxSha1sum;
    mobileurl?: PersonMobileurl;
    nsid?: string;
    pathAlias?: string;
    photos?: PersonPhotos;
    photosurl?: PersonPhotosurl;
    profileurl?: PersonProfileurl;
    realname?: PersonRealname;
    timezone?: PersonTimezone;
    unreadMessages?: PersonUnreadMessages;
    userSecret?: string;
    username?: PersonUsername;
    yintl?: string;
}
