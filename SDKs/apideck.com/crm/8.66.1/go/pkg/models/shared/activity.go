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
	AccountID          *string             `json:"account_id"`
	ActivityDate       *string             `json:"activity_date"`
	ActivityDatetime   *string             `json:"activity_datetime"`
	AllDayEvent        *bool               `json:"all_day_event"`
	Archived           *bool               `json:"archived"`
	AssetID            *string             `json:"asset_id"`
	Attendees          []ActivityAttendee  `json:"attendees"`
	CampaignID         *string             `json:"campaign_id"`
	CaseID             *string             `json:"case_id"`
	Child              *bool               `json:"child"`
	CompanyID          *string             `json:"company_id"`
	ContactID          *string             `json:"contact_id"`
	ContractID         *string             `json:"contract_id"`
	CreatedAt          *string             `json:"created_at"`
	CreatedBy          *string             `json:"created_by"`
	CustomFields       []CustomField       `json:"custom_fields"`
	CustomObjectID     *string             `json:"custom_object_id"`
	Deleted            *bool               `json:"deleted"`
	Description        *string             `json:"description"`
	Done               *bool               `json:"done"`
	DownstreamID       *string             `json:"downstream_id"`
	DurationMinutes    *int64              `json:"duration_minutes"`
	DurationSeconds    *int64              `json:"duration_seconds"`
	EndDate            *string             `json:"end_date"`
	EndDatetime        *string             `json:"end_datetime"`
	EventSubType       *string             `json:"event_sub_type"`
	GroupEvent         *bool               `json:"group_event"`
	GroupEventType     *string             `json:"group_event_type"`
	ID                 *string             `json:"id"`
	LeadID             *string             `json:"lead_id"`
	Location           *string             `json:"location"`
	LocationAddress    *Address            `json:"location_address"`
	Note               *string             `json:"note"`
	OpportunityID      *string             `json:"opportunity_id"`
	OwnerID            *string             `json:"owner_id"`
	Private            *bool               `json:"private"`
	ProductID          *string             `json:"product_id"`
	Recurrent          *bool               `json:"recurrent"`
	ReminderDatetime   *string             `json:"reminder_datetime"`
	ReminderSet        *bool               `json:"reminder_set"`
	ShowAs             *ActivityShowAsEnum `json:"show_as"`
	SolutionID         *string             `json:"solution_id"`
	StartDatetime      *string             `json:"start_datetime"`
	Title              *string             `json:"title"`
	Type               ActivityTypeEnum    `json:"type"`
	UpdatedAt          *string             `json:"updated_at"`
	UpdatedBy          *string             `json:"updated_by"`
	UserID             *string             `json:"user_id"`
	VideoConferenceID  *string             `json:"video_conference_id"`
	VideoConferenceURL *string             `json:"video_conference_url"`
}
