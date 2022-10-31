package shared

type CampaignStatusEnum string

const (
	CampaignStatusEnumScheduled      CampaignStatusEnum = "SCHEDULED"
	CampaignStatusEnumExecuting      CampaignStatusEnum = "EXECUTING"
	CampaignStatusEnumPendingNextRun CampaignStatusEnum = "PENDING_NEXT_RUN"
	CampaignStatusEnumCompleted      CampaignStatusEnum = "COMPLETED"
	CampaignStatusEnumPaused         CampaignStatusEnum = "PAUSED"
	CampaignStatusEnumDeleted        CampaignStatusEnum = "DELETED"
	CampaignStatusEnumInvalid        CampaignStatusEnum = "INVALID"
)
