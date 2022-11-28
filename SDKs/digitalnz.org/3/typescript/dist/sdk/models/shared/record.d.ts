import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecordCategoryEnum {
    Newspapers = "Newspapers",
    Images = "Images",
    Books = "Books",
    Articles = "Articles",
    Journals = "Journals",
    Archives = "Archives",
    Audio = "Audio",
    Other = "Other",
    Manuscripts = "Manuscripts",
    ReferenceSources = "Reference sources",
    ResearchPapers = "Research papers",
    Videos = "Videos",
    MusicScore = "Music Score",
    Groups = "Groups",
    Data = "Data",
    Websites = "Websites",
    Sets = "Sets"
}
export declare enum RecordCopyrightEnum {
    AllRightsReserved = "All rights reserved",
    SomeRightsReserved = "Some rights reserved",
    NoKnownCopyrightRestrictions = "No known copyright restrictions",
    Unknown = "Unknown"
}
export declare class RecordLocations extends SpeakeasyBase {
    comment?: string;
    lat?: number;
    lng?: number;
    placename?: string;
}
export declare enum RecordUsageEnum {
    AllRightsReserved = "All rights reserved",
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    Unknown = "Unknown"
}
/**
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record.
 *
**/
export declare class Record extends SpeakeasyBase {
    category?: RecordCategoryEnum[];
    collection?: string[];
    collectionTitle?: string[];
    contentPartner?: string[];
    copyright?: RecordCopyrightEnum[];
    createdAt?: Date;
    creator?: string[];
    date?: string[];
    dcIdentifier?: string[];
    description?: string;
    displayCollection?: string;
    displayContentPartner?: string;
    displayDate?: string;
    id?: number;
    landingUrl?: string;
    largeThumbnailUrl?: string;
    locations?: RecordLocations[];
    primaryCollection?: string[];
    rights?: string;
    rightsUrl?: string[];
    sourceUrl?: string;
    subject?: string[];
    thumbnailUrl?: string;
    title?: string;
    updatedAt?: Date;
    usage?: RecordUsageEnum[];
}
