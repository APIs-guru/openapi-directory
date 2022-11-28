import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
import { Owner } from "./owner";
import { Tag } from "./tag";
import { Url } from "./url";
export declare class PhotoComments extends SpeakeasyBase {
    content?: string;
}
export declare class PhotoDates extends SpeakeasyBase {
    lastupdate?: string;
    posted?: string;
    taken?: string;
    takengranularity?: string;
    takenunknown?: boolean;
}
export declare class PhotoDescription extends SpeakeasyBase {
    content?: string;
}
export declare class PhotoEditability extends SpeakeasyBase {
    canaddmeta?: boolean;
    cancomment?: boolean;
}
export declare class PhotoNotes extends SpeakeasyBase {
    note?: Note[];
}
export declare class PhotoPeople extends SpeakeasyBase {
    haspeople?: boolean;
}
export declare class PhotoPermissions extends SpeakeasyBase {
    permaddmeta?: string;
    permcomment?: string;
}
export declare class PhotoPubliceditability extends SpeakeasyBase {
    canaddmeta?: boolean;
    cancomment?: boolean;
}
export declare class PhotoTags extends SpeakeasyBase {
    tag?: Tag[];
}
export declare class PhotoTitle extends SpeakeasyBase {
    content?: string;
}
export declare class PhotoUrls extends SpeakeasyBase {
    url?: Url[];
}
export declare class PhotoUsage extends SpeakeasyBase {
    canblog?: boolean;
    candownload?: boolean;
    canprint?: boolean;
    canshare?: boolean;
}
export declare class PhotoVisibility extends SpeakeasyBase {
    isfamily?: boolean;
    isfriend?: boolean;
    ispublic?: boolean;
}
export declare class Photo extends SpeakeasyBase {
    comments?: PhotoComments;
    dates?: PhotoDates;
    dateuploaded?: string;
    description?: PhotoDescription;
    editability?: PhotoEditability;
    farm?: string;
    id?: string;
    isfavorite?: boolean;
    license?: string;
    media?: string;
    notes?: PhotoNotes;
    originalsecret?: string;
    owner?: Owner;
    people?: PhotoPeople;
    permissions?: PhotoPermissions;
    publiceditability?: PhotoPubliceditability;
    rotation?: string;
    safe?: boolean;
    safetyLevel?: string;
    secret?: string;
    server?: string;
    tags?: PhotoTags;
    title?: PhotoTitle;
    urls?: PhotoUrls;
    usage?: PhotoUsage;
    views?: string;
    visibility?: PhotoVisibility;
}
