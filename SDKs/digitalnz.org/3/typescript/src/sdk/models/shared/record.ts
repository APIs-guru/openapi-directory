import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RecordCategoryEnum {
    Newspapers = "Newspapers"
,    Images = "Images"
,    Books = "Books"
,    Articles = "Articles"
,    Journals = "Journals"
,    Archives = "Archives"
,    Audio = "Audio"
,    Other = "Other"
,    Manuscripts = "Manuscripts"
,    ReferenceSources = "Reference sources"
,    ResearchPapers = "Research papers"
,    Videos = "Videos"
,    MusicScore = "Music Score"
,    Groups = "Groups"
,    Data = "Data"
,    Websites = "Websites"
,    Sets = "Sets"
}

export enum RecordCopyrightEnum {
    AllRightsReserved = "All rights reserved"
,    SomeRightsReserved = "Some rights reserved"
,    NoKnownCopyrightRestrictions = "No known copyright restrictions"
,    Unknown = "Unknown"
}


export class RecordLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=placename" })
  placename?: string;
}

export enum RecordUsageEnum {
    AllRightsReserved = "All rights reserved"
,    Share = "Share"
,    Modify = "Modify"
,    UseCommercially = "Use commercially"
,    Unknown = "Unknown"
}


// Record
/** 
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record. 
 * 
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: RecordCategoryEnum[];

  @Metadata({ data: "json, name=collection" })
  collection?: string[];

  @Metadata({ data: "json, name=collection_title" })
  collectionTitle?: string[];

  @Metadata({ data: "json, name=content_partner" })
  contentPartner?: string[];

  @Metadata({ data: "json, name=copyright" })
  copyright?: RecordCopyrightEnum[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=creator" })
  creator?: string[];

  @Metadata({ data: "json, name=date" })
  date?: string[];

  @Metadata({ data: "json, name=dc_identifier" })
  dcIdentifier?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_collection" })
  displayCollection?: string;

  @Metadata({ data: "json, name=display_content_partner" })
  displayContentPartner?: string;

  @Metadata({ data: "json, name=display_date" })
  displayDate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=landing_url" })
  landingUrl?: string;

  @Metadata({ data: "json, name=large_thumbnail_url" })
  largeThumbnailUrl?: string;

  @Metadata({ data: "json, name=locations", elemType: shared.RecordLocations })
  locations?: RecordLocations[];

  @Metadata({ data: "json, name=primary_collection" })
  primaryCollection?: string[];

  @Metadata({ data: "json, name=rights" })
  rights?: string;

  @Metadata({ data: "json, name=rights_url" })
  rightsUrl?: string[];

  @Metadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string[];

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=usage" })
  usage?: RecordUsageEnum[];
}
