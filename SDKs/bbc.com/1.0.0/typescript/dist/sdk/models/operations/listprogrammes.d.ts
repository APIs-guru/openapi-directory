import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListProgrammesAudioDescribedEnum {
    True = "true",
    False = "false"
}
export declare enum ListProgrammesAvailabilityEnum {
    Available = "available",
    Pending = "pending"
}
export declare enum ListProgrammesAvailabilityEntityTypeEnum {
    Episode = "episode",
    Clip = "clip"
}
export declare enum ListProgrammesAvailabilityTypeEnum {
    Ondemand = "ondemand",
    Webcast = "webcast",
    Simulcast = "simulcast"
}
export declare enum ListProgrammesDurationEnum {
    Short = "short",
    Medium = "medium",
    Long = "long"
}
export declare enum ListProgrammesEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}
export declare enum ListProgrammesEntityTypeEnum {
    Brand = "brand",
    Series = "series",
    Episode = "episode",
    Clip = "clip"
}
export declare enum ListProgrammesMediaTypeEnum {
    Audio = "audio",
    AudioVideo = "audio_video"
}
export declare enum ListProgrammesMixinEnum {
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
export declare enum ListProgrammesPaymentTypeEnum {
    Free = "free",
    Bbcstore = "bbcstore",
    Uscansvod = "uscansvod"
}
export declare enum ListProgrammesSignedEnum {
    Exclusive = "exclusive",
    Inclusive = "inclusive",
    Exclude = "exclude"
}
export declare enum ListProgrammesSortEnum {
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
export declare enum ListProgrammesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare enum ListProgrammesTleoEnum {
    True = "true",
    False = "false"
}
export declare class ListProgrammesQueryParams extends SpeakeasyBase {
    audioDescribed?: ListProgrammesAudioDescribedEnum[];
    availability?: ListProgrammesAvailabilityEnum[];
    availabilityEntityType?: ListProgrammesAvailabilityEntityTypeEnum[];
    availabilityFrom?: Date;
    availabilityType?: ListProgrammesAvailabilityTypeEnum[];
    childrenOf?: string[];
    descendantsOf?: string[];
    duration?: ListProgrammesDurationEnum[];
    embargoed?: ListProgrammesEmbargoedEnum;
    entityType?: ListProgrammesEntityTypeEnum[];
    format?: string[];
    genre?: string[];
    group?: string;
    initialLetter?: string;
    initialLetterEnd?: string;
    initialLetterStart?: string;
    initialLetterStrict?: string[];
    item?: string[];
    masterBrand?: string[];
    mediaSet?: string;
    mediaType?: ListProgrammesMediaTypeEnum[];
    mixin?: ListProgrammesMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    paymentType?: ListProgrammesPaymentTypeEnum[];
    people?: string;
    pid?: string[];
    promotedFor?: string;
    q?: string;
    signed?: ListProgrammesSignedEnum[];
    sort?: ListProgrammesSortEnum;
    sortDirection?: ListProgrammesSortDirectionEnum;
    tagName?: string;
    tagScheme?: string;
    tleo?: ListProgrammesTleoEnum[];
    version?: string[];
}
export declare class ListProgrammesRequest extends SpeakeasyBase {
    queryParams: ListProgrammesQueryParams;
}
export declare class ListProgrammesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
