package shared

type ActivityShowAsEnum string

const (
	ActivityShowAsEnumFree ActivityShowAsEnum = "free"
	ActivityShowAsEnumBusy ActivityShowAsEnum = "busy"
)

type ActivityTypeEnum string

const (
	ActivityTypeEnumCall       ActivityTypeEnum = "call"
	ActivityTypeEnumMeeting    ActivityTypeEnum = "meeting"
	ActivityTypeEnumEmail      ActivityTypeEnum = "email"
	ActivityTypeEnumNote       ActivityTypeEnum = "note"
	ActivityTypeEnumTask       ActivityTypeEnum = "task"
	ActivityTypeEnumDeadline   ActivityTypeEnum = "deadline"
	ActivityTypeEnumSendLetter ActivityTypeEnum = "send-letter"
	ActivityTypeEnumSendQuote  ActivityTypeEnum = "send-quote"
	ActivityTypeEnumOther      ActivityTypeEnum = "other"
)

type Activity struct {
	AccountID          *string             `json:"account_id,omitempty"`
	ActivityDate       *string             `json:"activity_date,omitempty"`
	ActivityDatetime   *string             `json:"activity_datetime,omitempty"`
	AllDayEvent        *bool               `json:"all_day_event,omitempty"`
	Archived           *bool               `json:"archived,omitempty"`
	AssetID            *string             `json:"asset_id,omitempty"`
	Attendees          []ActivityAttendee  `json:"attendees,omitempty"`
	CampaignID         *string             `json:"campaign_id,omitempty"`
	CaseID             *string             `json:"case_id,omitempty"`
	Child              *bool               `json:"child,omitempty"`
	CompanyID          *string             `json:"company_id,omitempty"`
	ContactID          *string             `json:"contact_id,omitempty"`
	ContractID         *string             `json:"contract_id,omitempty"`
	CreatedAt          *string             `json:"created_at,omitempty"`
	CreatedBy          *string             `json:"created_by,omitempty"`
	CustomFields       []CustomField       `json:"custom_fields,omitempty"`
	CustomObjectID     *string             `json:"custom_object_id,omitempty"`
	Deleted            *bool               `json:"deleted,omitempty"`
	Description        *string             `json:"description,omitempty"`
	Done               *bool               `json:"done,omitempty"`
	DownstreamID       *string             `json:"downstream_id,omitempty"`
	DurationMinutes    *int64              `json:"duration_minutes,omitempty"`
	DurationSeconds    *int64              `json:"duration_seconds,omitempty"`
	EndDate            *string             `json:"end_date,omitempty"`
	EndDatetime        *string             `json:"end_datetime,omitempty"`
	EventSubType       *string             `json:"event_sub_type,omitempty"`
	GroupEvent         *bool               `json:"group_event,omitempty"`
	GroupEventType     *string             `json:"group_event_type,omitempty"`
	ID                 *string             `json:"id,omitempty"`
	LeadID             *string             `json:"lead_id,omitempty"`
	Location           *string             `json:"location,omitempty"`
	LocationAddress    *Address            `json:"location_address,omitempty"`
	Note               *string             `json:"note,omitempty"`
	OpportunityID      *string             `json:"opportunity_id,omitempty"`
	OwnerID            *string             `json:"owner_id,omitempty"`
	Private            *bool               `json:"private,omitempty"`
	ProductID          *string             `json:"product_id,omitempty"`
	Recurrent          *bool               `json:"recurrent,omitempty"`
	ReminderDatetime   *string             `json:"reminder_datetime,omitempty"`
	ReminderSet        *bool               `json:"reminder_set,omitempty"`
	ShowAs             *ActivityShowAsEnum `json:"show_as,omitempty"`
	SolutionID         *string             `json:"solution_id,omitempty"`
	StartDatetime      *string             `json:"start_datetime,omitempty"`
	Title              *string             `json:"title,omitempty"`
	Type               ActivityTypeEnum    `json:"type"`
	UpdatedAt          *string             `json:"updated_at,omitempty"`
	UpdatedBy          *string             `json:"updated_by,omitempty"`
	UserID             *string             `json:"user_id,omitempty"`
	VideoConferenceID  *string             `json:"video_conference_id,omitempty"`
	VideoConferenceURL *string             `json:"video_conference_url,omitempty"`
}
