import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecordCategoryEnum {
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

export enum RecordCopyrightEnum {
    AllRightsReserved = "All rights reserved",
    SomeRightsReserved = "Some rights reserved",
    NoKnownCopyrightRestrictions = "No known copyright restrictions",
    Unknown = "Unknown"
}


export class RecordLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=placename" })
  placename?: string;
}

export enum RecordUsageEnum {
    AllRightsReserved = "All rights reserved",
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    Unknown = "Unknown"
}


// Record
/** 
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record. 
 * 
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: RecordCategoryEnum[];

  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string[];

  @SpeakeasyMetadata({ data: "json, name=collection_title" })
  collectionTitle?: string[];

  @SpeakeasyMetadata({ data: "json, name=content_partner" })
  contentPartner?: string[];

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: RecordCopyrightEnum[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string[];

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string[];

  @SpeakeasyMetadata({ data: "json, name=dc_identifier" })
  dcIdentifier?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_collection" })
  displayCollection?: string;

  @SpeakeasyMetadata({ data: "json, name=display_content_partner" })
  displayContentPartner?: string;

  @SpeakeasyMetadata({ data: "json, name=display_date" })
  displayDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=landing_url" })
  landingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=large_thumbnail_url" })
  largeThumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: RecordLocations })
  locations?: RecordLocations[];

  @SpeakeasyMetadata({ data: "json, name=primary_collection" })
  primaryCollection?: string[];

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "json, name=rights_url" })
  rightsUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: RecordUsageEnum[];
}
