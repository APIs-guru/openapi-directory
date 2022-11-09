import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListProgrammesAudioDescribedEnum {
    True = "true"
,    False = "false"
}

export enum ListProgrammesAvailabilityEnum {
    Available = "available"
,    Pending = "pending"
}

export enum ListProgrammesAvailabilityEntityTypeEnum {
    Episode = "episode"
,    Clip = "clip"
}

export enum ListProgrammesAvailabilityTypeEnum {
    Ondemand = "ondemand"
,    Webcast = "webcast"
,    Simulcast = "simulcast"
}

export enum ListProgrammesDurationEnum {
    Short = "short"
,    Medium = "medium"
,    Long = "long"
}

export enum ListProgrammesEmbargoedEnum {
    Include = "include"
,    Exclude = "exclude"
,    Only = "only"
}

export enum ListProgrammesEntityTypeEnum {
    Brand = "brand"
,    Series = "series"
,    Episode = "episode"
,    Clip = "clip"
}

export enum ListProgrammesMediaTypeEnum {
    Audio = "audio"
,    AudioVideo = "audio_video"
}

export enum ListProgrammesMixinEnum {
    AlternateImages = "alternate_images"
,    AncestorTitles = "ancestor_titles"
,    Availability = "availability"
,    AvailableSimulcasts = "available_simulcasts"
,    AvailableVersions = "available_versions"
,    AvailableWebcasts = "available_webcasts"
,    Contributions = "contributions"
,    Duration = "duration"
,    GenreGroupings = "genre_groupings"
,    GenreGroups = "genre_groups"
,    Images = "images"
,    IsEmbeddable = "is_embeddable"
,    PreviousNext = "previous_next"
,    ProgrammeType = "programme_type"
,    RelatedLinks = "related_links"
,    Titles = "titles"
,    VersionsAvailability = "versions_availability"
}

export enum ListProgrammesPaymentTypeEnum {
    Free = "free"
,    Bbcstore = "bbcstore"
,    Uscansvod = "uscansvod"
}

export enum ListProgrammesSignedEnum {
    Exclusive = "exclusive"
,    Inclusive = "inclusive"
,    Exclude = "exclude"
}

export enum ListProgrammesSortEnum {
    GroupPosition = "group_position"
,    Pid = "pid"
,    Position = "position"
,    Promotion = "promotion"
,    ReleaseDate = "release_date"
,    Relevance = "relevance"
,    ScheduledStart = "scheduled_start"
,    StrictTitle = "strict_title"
,    Title = "title"
,    Tree = "tree"
}

export enum ListProgrammesSortDirectionEnum {
    Ascending = "ascending"
,    Descending = "descending"
}

export enum ListProgrammesTleoEnum {
    True = "true"
,    False = "false"
}


export class ListProgrammesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=audio_described" })
  audioDescribed?: ListProgrammesAudioDescribedEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListProgrammesAvailabilityEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=availability_entity_type" })
  availabilityEntityType?: ListProgrammesAvailabilityEntityTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=availability_from" })
  availabilityFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=availability_type" })
  availabilityType?: ListProgrammesAvailabilityTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=children_of" })
  childrenOf?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: ListProgrammesDurationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListProgrammesEmbargoedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_type" })
  entityType?: ListProgrammesEntityTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=genre" })
  genre?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter" })
  initialLetter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_end" })
  initialLetterEnd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_start" })
  initialLetterStart?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_strict" })
  initialLetterStrict?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=item" })
  item?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=master_brand" })
  masterBrand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=media_type" })
  mediaType?: ListProgrammesMediaTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListProgrammesMixinEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: ListProgrammesPaymentTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=people" })
  people?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=promoted_for" })
  promotedFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signed" })
  signed?: ListProgrammesSignedEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListProgrammesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListProgrammesSortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_scheme" })
  tagScheme?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tleo" })
  tleo?: ListProgrammesTleoEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string[];
}


export class ListProgrammesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListProgrammesQueryParams;
}


export class ListProgrammesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
