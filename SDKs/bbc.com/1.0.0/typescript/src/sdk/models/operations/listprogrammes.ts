import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListProgrammesAudioDescribedEnum {
    True = "true",
    False = "false"
}

export enum ListProgrammesAvailabilityEnum {
    Available = "available",
    Pending = "pending"
}

export enum ListProgrammesAvailabilityEntityTypeEnum {
    Episode = "episode",
    Clip = "clip"
}

export enum ListProgrammesAvailabilityTypeEnum {
    Ondemand = "ondemand",
    Webcast = "webcast",
    Simulcast = "simulcast"
}

export enum ListProgrammesDurationEnum {
    Short = "short",
    Medium = "medium",
    Long = "long"
}

export enum ListProgrammesEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}

export enum ListProgrammesEntityTypeEnum {
    Brand = "brand",
    Series = "series",
    Episode = "episode",
    Clip = "clip"
}

export enum ListProgrammesMediaTypeEnum {
    Audio = "audio",
    AudioVideo = "audio_video"
}

export enum ListProgrammesMixinEnum {
    AlternateImages = "alternate_images",
    AncestorTitles = "ancestor_titles",
    Availability = "availability",
    AvailableSimulcasts = "available_simulcasts",
    AvailableVersions = "available_versions",
    AvailableWebcasts = "available_webcasts",
    Contributions = "contributions",
    Duration = "duration",
    GenreGroupings = "genre_groupings",
    GenreGroups = "genre_groups",
    Images = "images",
    IsEmbeddable = "is_embeddable",
    PreviousNext = "previous_next",
    ProgrammeType = "programme_type",
    RelatedLinks = "related_links",
    Titles = "titles",
    VersionsAvailability = "versions_availability"
}

export enum ListProgrammesPaymentTypeEnum {
    Free = "free",
    Bbcstore = "bbcstore",
    Uscansvod = "uscansvod"
}

export enum ListProgrammesSignedEnum {
    Exclusive = "exclusive",
    Inclusive = "inclusive",
    Exclude = "exclude"
}

export enum ListProgrammesSortEnum {
    GroupPosition = "group_position",
    Pid = "pid",
    Position = "position",
    Promotion = "promotion",
    ReleaseDate = "release_date",
    Relevance = "relevance",
    ScheduledStart = "scheduled_start",
    StrictTitle = "strict_title",
    Title = "title",
    Tree = "tree"
}

export enum ListProgrammesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}

export enum ListProgrammesTleoEnum {
    True = "true",
    False = "false"
}


export class ListProgrammesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audio_described" })
  audioDescribed?: ListProgrammesAudioDescribedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListProgrammesAvailabilityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability_entity_type" })
  availabilityEntityType?: ListProgrammesAvailabilityEntityTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability_from" })
  availabilityFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability_type" })
  availabilityType?: ListProgrammesAvailabilityTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=children_of" })
  childrenOf?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: ListProgrammesDurationEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListProgrammesEmbargoedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_type" })
  entityType?: ListProgrammesEntityTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre" })
  genre?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_letter" })
  initialLetter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_letter_end" })
  initialLetterEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_letter_start" })
  initialLetterStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_letter_strict" })
  initialLetterStrict?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item" })
  item?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=master_brand" })
  masterBrand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media_type" })
  mediaType?: ListProgrammesMediaTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListProgrammesMixinEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: ListProgrammesPaymentTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people" })
  people?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promoted_for" })
  promotedFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signed" })
  signed?: ListProgrammesSignedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListProgrammesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListProgrammesSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag_scheme" })
  tagScheme?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tleo" })
  tleo?: ListProgrammesTleoEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string[];
}


export class ListProgrammesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListProgrammesQueryParams;
}


export class ListProgrammesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
