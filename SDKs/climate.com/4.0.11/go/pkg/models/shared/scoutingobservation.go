package shared

import (
"time")


type ScoutingObservationLocationDisplayColorEnum string

const (
    ScoutingObservationLocationDisplayColorEnumNumber307af7 ScoutingObservationLocationDisplayColorEnum = "#307af7"
ScoutingObservationLocationDisplayColorEnumNumber38d753 ScoutingObservationLocationDisplayColorEnum = "#38d753"
ScoutingObservationLocationDisplayColorEnumNumberB037e4 ScoutingObservationLocationDisplayColorEnum = "#b037e4"
ScoutingObservationLocationDisplayColorEnumNumberEf3e3e ScoutingObservationLocationDisplayColorEnum = "#ef3e3e"
ScoutingObservationLocationDisplayColorEnumNumberF7ec41 ScoutingObservationLocationDisplayColorEnum = "#f7ec41"
ScoutingObservationLocationDisplayColorEnumNumberFf8439 ScoutingObservationLocationDisplayColorEnum = "#ff8439"
ScoutingObservationLocationDisplayColorEnumNumber808080 ScoutingObservationLocationDisplayColorEnum = "#808080"
)



type ScoutingObservationStatusEnum string

const (
    ScoutingObservationStatusEnumActive ScoutingObservationStatusEnum = "ACTIVE"
ScoutingObservationStatusEnumDeleted ScoutingObservationStatusEnum = "DELETED"
)



type ScoutingObservationTimespanEnum string

const (
    ScoutingObservationTimespanEnumPermanent ScoutingObservationTimespanEnum = "PERMANENT"
ScoutingObservationTimespanEnumSeasonal ScoutingObservationTimespanEnum = "SEASONAL"
)


type ScoutingObservation struct {
    EndTime time.Time `json:"endTime"`
    FieldIds []string `json:"fieldIds"`
    ID string `json:"id"`
    Location interface{} `json:"location"`
    LocationDisplayColor ScoutingObservationLocationDisplayColorEnum `json:"locationDisplayColor"`
    Note string `json:"note"`
    StartTime time.Time `json:"startTime"`
    Status ScoutingObservationStatusEnum `json:"status"`
    Tags []ScoutingTag `json:"tags"`
    Timespan ScoutingObservationTimespanEnum `json:"timespan"`
    Title string `json:"title"`
    UpdatedAt time.Time `json:"updatedAt"`
    
}

