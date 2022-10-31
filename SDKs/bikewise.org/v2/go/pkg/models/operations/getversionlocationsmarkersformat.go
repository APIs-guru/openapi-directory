package operations

type GetVersionLocationsMarkersFormatIncidentTypeEnum string

const (
	GetVersionLocationsMarkersFormatIncidentTypeEnumCrash               GetVersionLocationsMarkersFormatIncidentTypeEnum = "crash"
	GetVersionLocationsMarkersFormatIncidentTypeEnumHazard              GetVersionLocationsMarkersFormatIncidentTypeEnum = "hazard"
	GetVersionLocationsMarkersFormatIncidentTypeEnumTheft               GetVersionLocationsMarkersFormatIncidentTypeEnum = "theft"
	GetVersionLocationsMarkersFormatIncidentTypeEnumUnconfirmed         GetVersionLocationsMarkersFormatIncidentTypeEnum = "unconfirmed"
	GetVersionLocationsMarkersFormatIncidentTypeEnumInfrastructureIssue GetVersionLocationsMarkersFormatIncidentTypeEnum = "infrastructure_issue"
	GetVersionLocationsMarkersFormatIncidentTypeEnumChopShop            GetVersionLocationsMarkersFormatIncidentTypeEnum = "chop_shop"
)

type GetVersionLocationsMarkersFormatQueryParams struct {
	All             *bool                                             `queryParam:"style=form,explode=true,name=all"`
	IncidentType    *GetVersionLocationsMarkersFormatIncidentTypeEnum `queryParam:"style=form,explode=true,name=incident_type"`
	Limit           *int32                                            `queryParam:"style=form,explode=true,name=limit"`
	OccurredAfter   *int32                                            `queryParam:"style=form,explode=true,name=occurred_after"`
	OccurredBefore  *int32                                            `queryParam:"style=form,explode=true,name=occurred_before"`
	Proximity       *string                                           `queryParam:"style=form,explode=true,name=proximity"`
	ProximitySquare *int32                                            `queryParam:"style=form,explode=true,name=proximity_square"`
	Query           *string                                           `queryParam:"style=form,explode=true,name=query"`
}

type GetVersionLocationsMarkersFormatRequest struct {
	QueryParams GetVersionLocationsMarkersFormatQueryParams
}

type GetVersionLocationsMarkersFormatResponse struct {
	ContentType string
	StatusCode  int64
}
