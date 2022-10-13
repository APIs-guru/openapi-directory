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
	Comment   *string  `json:"comment"`
	Lat       *float64 `json:"lat"`
	Lng       *float64 `json:"lng"`
	Placename *string  `json:"placename"`
}

type RecordUsageEnum string

const (
	RecordUsageEnumAllRightsReserved RecordUsageEnum = "All rights reserved"
	RecordUsageEnumShare             RecordUsageEnum = "Share"
	RecordUsageEnumModify            RecordUsageEnum = "Modify"
	RecordUsageEnumUseCommercially   RecordUsageEnum = "Use commercially"
	RecordUsageEnumUnknown           RecordUsageEnum = "Unknown"
)

type Record struct {
	Category              []RecordCategoryEnum  `json:"category"`
	Collection            []string              `json:"collection"`
	CollectionTitle       []string              `json:"collection_title"`
	ContentPartner        []string              `json:"content_partner"`
	Copyright             []RecordCopyrightEnum `json:"copyright"`
	CreatedAt             *time.Time            `json:"created_at"`
	Creator               []string              `json:"creator"`
	Date                  []string              `json:"date"`
	DcIdentifier          []string              `json:"dc_identifier"`
	Description           *string               `json:"description"`
	DisplayCollection     *string               `json:"display_collection"`
	DisplayContentPartner *string               `json:"display_content_partner"`
	DisplayDate           *string               `json:"display_date"`
	ID                    *int64                `json:"id"`
	LandingURL            *string               `json:"landing_url"`
	LargeThumbnailURL     *string               `json:"large_thumbnail_url"`
	Locations             []RecordLocations     `json:"locations"`
	PrimaryCollection     []string              `json:"primary_collection"`
	Rights                *string               `json:"rights"`
	RightsURL             []string              `json:"rights_url"`
	SourceURL             *string               `json:"source_url"`
	Subject               []string              `json:"subject"`
	ThumbnailURL          *string               `json:"thumbnail_url"`
	Title                 *string               `json:"title"`
	UpdatedAt             *time.Time            `json:"updated_at"`
	Usage                 []RecordUsageEnum     `json:"usage"`
}
