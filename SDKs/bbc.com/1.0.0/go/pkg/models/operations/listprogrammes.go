package operations

import (
"time"
"openapi/pkg/models/shared")


type ListProgrammesAudioDescribedEnum string

const (
    ListProgrammesAudioDescribedEnumTrue ListProgrammesAudioDescribedEnum = "true"
ListProgrammesAudioDescribedEnumFalse ListProgrammesAudioDescribedEnum = "false"
)



type ListProgrammesAvailabilityEnum string

const (
    ListProgrammesAvailabilityEnumAvailable ListProgrammesAvailabilityEnum = "available"
ListProgrammesAvailabilityEnumPending ListProgrammesAvailabilityEnum = "pending"
)



type ListProgrammesAvailabilityEntityTypeEnum string

const (
    ListProgrammesAvailabilityEntityTypeEnumEpisode ListProgrammesAvailabilityEntityTypeEnum = "episode"
ListProgrammesAvailabilityEntityTypeEnumClip ListProgrammesAvailabilityEntityTypeEnum = "clip"
)



type ListProgrammesAvailabilityTypeEnum string

const (
    ListProgrammesAvailabilityTypeEnumOndemand ListProgrammesAvailabilityTypeEnum = "ondemand"
ListProgrammesAvailabilityTypeEnumWebcast ListProgrammesAvailabilityTypeEnum = "webcast"
ListProgrammesAvailabilityTypeEnumSimulcast ListProgrammesAvailabilityTypeEnum = "simulcast"
)



type ListProgrammesDurationEnum string

const (
    ListProgrammesDurationEnumShort ListProgrammesDurationEnum = "short"
ListProgrammesDurationEnumMedium ListProgrammesDurationEnum = "medium"
ListProgrammesDurationEnumLong ListProgrammesDurationEnum = "long"
)



type ListProgrammesEmbargoedEnum string

const (
    ListProgrammesEmbargoedEnumInclude ListProgrammesEmbargoedEnum = "include"
ListProgrammesEmbargoedEnumExclude ListProgrammesEmbargoedEnum = "exclude"
ListProgrammesEmbargoedEnumOnly ListProgrammesEmbargoedEnum = "only"
)



type ListProgrammesEntityTypeEnum string

const (
    ListProgrammesEntityTypeEnumBrand ListProgrammesEntityTypeEnum = "brand"
ListProgrammesEntityTypeEnumSeries ListProgrammesEntityTypeEnum = "series"
ListProgrammesEntityTypeEnumEpisode ListProgrammesEntityTypeEnum = "episode"
ListProgrammesEntityTypeEnumClip ListProgrammesEntityTypeEnum = "clip"
)



type ListProgrammesMediaTypeEnum string

const (
    ListProgrammesMediaTypeEnumAudio ListProgrammesMediaTypeEnum = "audio"
ListProgrammesMediaTypeEnumAudioVideo ListProgrammesMediaTypeEnum = "audio_video"
)



type ListProgrammesMixinEnum string

const (
    ListProgrammesMixinEnumAlternateImages ListProgrammesMixinEnum = "alternate_images"
ListProgrammesMixinEnumAncestorTitles ListProgrammesMixinEnum = "ancestor_titles"
ListProgrammesMixinEnumAvailability ListProgrammesMixinEnum = "availability"
ListProgrammesMixinEnumAvailableSimulcasts ListProgrammesMixinEnum = "available_simulcasts"
ListProgrammesMixinEnumAvailableVersions ListProgrammesMixinEnum = "available_versions"
ListProgrammesMixinEnumAvailableWebcasts ListProgrammesMixinEnum = "available_webcasts"
ListProgrammesMixinEnumContributions ListProgrammesMixinEnum = "contributions"
ListProgrammesMixinEnumDuration ListProgrammesMixinEnum = "duration"
ListProgrammesMixinEnumGenreGroupings ListProgrammesMixinEnum = "genre_groupings"
ListProgrammesMixinEnumGenreGroups ListProgrammesMixinEnum = "genre_groups"
ListProgrammesMixinEnumImages ListProgrammesMixinEnum = "images"
ListProgrammesMixinEnumIsEmbeddable ListProgrammesMixinEnum = "is_embeddable"
ListProgrammesMixinEnumPreviousNext ListProgrammesMixinEnum = "previous_next"
ListProgrammesMixinEnumProgrammeType ListProgrammesMixinEnum = "programme_type"
ListProgrammesMixinEnumRelatedLinks ListProgrammesMixinEnum = "related_links"
ListProgrammesMixinEnumTitles ListProgrammesMixinEnum = "titles"
ListProgrammesMixinEnumVersionsAvailability ListProgrammesMixinEnum = "versions_availability"
)



type ListProgrammesPaymentTypeEnum string

const (
    ListProgrammesPaymentTypeEnumFree ListProgrammesPaymentTypeEnum = "free"
ListProgrammesPaymentTypeEnumBbcstore ListProgrammesPaymentTypeEnum = "bbcstore"
ListProgrammesPaymentTypeEnumUscansvod ListProgrammesPaymentTypeEnum = "uscansvod"
)



type ListProgrammesSignedEnum string

const (
    ListProgrammesSignedEnumExclusive ListProgrammesSignedEnum = "exclusive"
ListProgrammesSignedEnumInclusive ListProgrammesSignedEnum = "inclusive"
ListProgrammesSignedEnumExclude ListProgrammesSignedEnum = "exclude"
)



type ListProgrammesSortEnum string

const (
    ListProgrammesSortEnumGroupPosition ListProgrammesSortEnum = "group_position"
ListProgrammesSortEnumPid ListProgrammesSortEnum = "pid"
ListProgrammesSortEnumPosition ListProgrammesSortEnum = "position"
ListProgrammesSortEnumPromotion ListProgrammesSortEnum = "promotion"
ListProgrammesSortEnumReleaseDate ListProgrammesSortEnum = "release_date"
ListProgrammesSortEnumRelevance ListProgrammesSortEnum = "relevance"
ListProgrammesSortEnumScheduledStart ListProgrammesSortEnum = "scheduled_start"
ListProgrammesSortEnumStrictTitle ListProgrammesSortEnum = "strict_title"
ListProgrammesSortEnumTitle ListProgrammesSortEnum = "title"
ListProgrammesSortEnumTree ListProgrammesSortEnum = "tree"
)



type ListProgrammesSortDirectionEnum string

const (
    ListProgrammesSortDirectionEnumAscending ListProgrammesSortDirectionEnum = "ascending"
ListProgrammesSortDirectionEnumDescending ListProgrammesSortDirectionEnum = "descending"
)



type ListProgrammesTleoEnum string

const (
    ListProgrammesTleoEnumTrue ListProgrammesTleoEnum = "true"
ListProgrammesTleoEnumFalse ListProgrammesTleoEnum = "false"
)


type ListProgrammesQueryParams struct {
    AudioDescribed []ListProgrammesAudioDescribedEnum `queryParam:"style=form,explode=true,name=audio_described"`
    Availability []ListProgrammesAvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    AvailabilityEntityType []ListProgrammesAvailabilityEntityTypeEnum `queryParam:"style=form,explode=true,name=availability_entity_type"`
    AvailabilityFrom *time.Time `queryParam:"style=form,explode=true,name=availability_from"`
    AvailabilityType []ListProgrammesAvailabilityTypeEnum `queryParam:"style=form,explode=true,name=availability_type"`
    ChildrenOf []string `queryParam:"style=form,explode=true,name=children_of"`
    DescendantsOf []string `queryParam:"style=form,explode=true,name=descendants_of"`
    Duration []ListProgrammesDurationEnum `queryParam:"style=form,explode=true,name=duration"`
    Embargoed *ListProgrammesEmbargoedEnum `queryParam:"style=form,explode=true,name=embargoed"`
    EntityType []ListProgrammesEntityTypeEnum `queryParam:"style=form,explode=true,name=entity_type"`
    Format []string `queryParam:"style=form,explode=true,name=format"`
    Genre []string `queryParam:"style=form,explode=true,name=genre"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    InitialLetter *string `queryParam:"style=form,explode=true,name=initial_letter"`
    InitialLetterEnd *string `queryParam:"style=form,explode=true,name=initial_letter_end"`
    InitialLetterStart *string `queryParam:"style=form,explode=true,name=initial_letter_start"`
    InitialLetterStrict []string `queryParam:"style=form,explode=true,name=initial_letter_strict"`
    Item []string `queryParam:"style=form,explode=true,name=item"`
    MasterBrand []string `queryParam:"style=form,explode=true,name=master_brand"`
    MediaSet *string `queryParam:"style=form,explode=true,name=media_set"`
    MediaType []ListProgrammesMediaTypeEnum `queryParam:"style=form,explode=true,name=media_type"`
    Mixin []ListProgrammesMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    PaymentType []ListProgrammesPaymentTypeEnum `queryParam:"style=form,explode=true,name=payment_type"`
    People *string `queryParam:"style=form,explode=true,name=people"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    PromotedFor *string `queryParam:"style=form,explode=true,name=promoted_for"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Signed []ListProgrammesSignedEnum `queryParam:"style=form,explode=true,name=signed"`
    Sort *ListProgrammesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection *ListProgrammesSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    TagName *string `queryParam:"style=form,explode=true,name=tag_name"`
    TagScheme *string `queryParam:"style=form,explode=true,name=tag_scheme"`
    Tleo []ListProgrammesTleoEnum `queryParam:"style=form,explode=true,name=tleo"`
    Version []string `queryParam:"style=form,explode=true,name=version"`
    
}

type ListProgrammesRequest struct {
    QueryParams ListProgrammesQueryParams 
    
}

type ListProgrammesResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

