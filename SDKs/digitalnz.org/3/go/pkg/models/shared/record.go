package shared

import (
	"time"
)

type RecordCategoryEnum string

const (
	RecordCategoryEnumNewspapers       RecordCategoryEnum = "Newspapers"
	RecordCategoryEnumImages           RecordCategoryEnum = "Images"
	RecordCategoryEnumBooks            RecordCategoryEnum = "Books"
	RecordCategoryEnumArticles         RecordCategoryEnum = "Articles"
	RecordCategoryEnumJournals         RecordCategoryEnum = "Journals"
	RecordCategoryEnumArchives         RecordCategoryEnum = "Archives"
	RecordCategoryEnumAudio            RecordCategoryEnum = "Audio"
	RecordCategoryEnumOther            RecordCategoryEnum = "Other"
	RecordCategoryEnumManuscripts      RecordCategoryEnum = "Manuscripts"
	RecordCategoryEnumReferenceSources RecordCategoryEnum = "Reference sources"
	RecordCategoryEnumResearchPapers   RecordCategoryEnum = "Research papers"
	RecordCategoryEnumVideos           RecordCategoryEnum = "Videos"
	RecordCategoryEnumMusicScore       RecordCategoryEnum = "Music Score"
	RecordCategoryEnumGroups           RecordCategoryEnum = "Groups"
	RecordCategoryEnumData             RecordCategoryEnum = "Data"
	RecordCategoryEnumWebsites         RecordCategoryEnum = "Websites"
	RecordCategoryEnumSets             RecordCategoryEnum = "Sets"
)

type RecordCopyrightEnum string

const (
	RecordCopyrightEnumAllRightsReserved            RecordCopyrightEnum = "All rights reserved"
	RecordCopyrightEnumSomeRightsReserved           RecordCopyrightEnum = "Some rights reserved"
	RecordCopyrightEnumNoKnownCopyrightRestrictions RecordCopyrightEnum = "No known copyright restrictions"
	RecordCopyrightEnumUnknown                      RecordCopyrightEnum = "Unknown"
)

type RecordLocations struct {
	Comment   *string  `json:"comment,omitempty"`
	Lat       *float64 `json:"lat,omitempty"`
	Lng       *float64 `json:"lng,omitempty"`
	Placename *string  `json:"placename,omitempty"`
}

type RecordUsageEnum string

const (
	RecordUsageEnumAllRightsReserved RecordUsageEnum = "All rights reserved"
	RecordUsageEnumShare             RecordUsageEnum = "Share"
	RecordUsageEnumModify            RecordUsageEnum = "Modify"
	RecordUsageEnumUseCommercially   RecordUsageEnum = "Use commercially"
	RecordUsageEnumUnknown           RecordUsageEnum = "Unknown"
)

// Record
// *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record.
type Record struct {
	Category              []RecordCategoryEnum  `json:"category,omitempty"`
	Collection            []string              `json:"collection,omitempty"`
	CollectionTitle       []string              `json:"collection_title,omitempty"`
	ContentPartner        []string              `json:"content_partner,omitempty"`
	Copyright             []RecordCopyrightEnum `json:"copyright,omitempty"`
	CreatedAt             *time.Time            `json:"created_at,omitempty"`
	Creator               []string              `json:"creator,omitempty"`
	Date                  []string              `json:"date,omitempty"`
	DcIdentifier          []string              `json:"dc_identifier,omitempty"`
	Description           *string               `json:"description,omitempty"`
	DisplayCollection     *string               `json:"display_collection,omitempty"`
	DisplayContentPartner *string               `json:"display_content_partner,omitempty"`
	DisplayDate           *string               `json:"display_date,omitempty"`
	ID                    *int64                `json:"id,omitempty"`
	LandingURL            *string               `json:"landing_url,omitempty"`
	LargeThumbnailURL     *string               `json:"large_thumbnail_url,omitempty"`
	Locations             []RecordLocations     `json:"locations,omitempty"`
	PrimaryCollection     []string              `json:"primary_collection,omitempty"`
	Rights                *string               `json:"rights,omitempty"`
	RightsURL             []string              `json:"rights_url,omitempty"`
	SourceURL             *string               `json:"source_url,omitempty"`
	Subject               []string              `json:"subject,omitempty"`
	ThumbnailURL          *string               `json:"thumbnail_url,omitempty"`
	Title                 *string               `json:"title,omitempty"`
	UpdatedAt             *time.Time            `json:"updated_at,omitempty"`
	Usage                 []RecordUsageEnum     `json:"usage,omitempty"`
}
