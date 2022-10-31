package operations




type GetVersionIncidentsFormatIncidentTypeEnum string

const (
    GetVersionIncidentsFormatIncidentTypeEnumCrash GetVersionIncidentsFormatIncidentTypeEnum = "crash"
GetVersionIncidentsFormatIncidentTypeEnumHazard GetVersionIncidentsFormatIncidentTypeEnum = "hazard"
GetVersionIncidentsFormatIncidentTypeEnumTheft GetVersionIncidentsFormatIncidentTypeEnum = "theft"
GetVersionIncidentsFormatIncidentTypeEnumUnconfirmed GetVersionIncidentsFormatIncidentTypeEnum = "unconfirmed"
GetVersionIncidentsFormatIncidentTypeEnumInfrastructureIssue GetVersionIncidentsFormatIncidentTypeEnum = "infrastructure_issue"
GetVersionIncidentsFormatIncidentTypeEnumChopShop GetVersionIncidentsFormatIncidentTypeEnum = "chop_shop"
)


type GetVersionIncidentsFormatQueryParams struct {
    IncidentType *GetVersionIncidentsFormatIncidentTypeEnum `queryParam:"style=form,explode=true,name=incident_type"`
    OccurredAfter *int32 `queryParam:"style=form,explode=true,name=occurred_after"`
    OccurredBefore *int32 `queryParam:"style=form,explode=true,name=occurred_before"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Proximity *string `queryParam:"style=form,explode=true,name=proximity"`
    ProximitySquare *int32 `queryParam:"style=form,explode=true,name=proximity_square"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetVersionIncidentsFormatRequest struct {
    QueryParams GetVersionIncidentsFormatQueryParams 
    
}

type GetVersionIncidentsFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

