package shared

import (
	"time"
)

type Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks struct {
	Self *string `json:"self"`
}

type Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum string

const (
	Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnumOk              Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum = "ok"
	Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnumNotFound        Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum = "not_found"
	Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnumAssigned        Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum = "assigned"
	Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnumAlreadyAssigned Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum = "already_assigned"
	Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnumServiceDown     Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum = "service_down"
)

type Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems struct {
	AssignedAt *time.Time                                                                                                                                `json:"assigned_at"`
	Links      *Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks      `json:"links"`
	Status     *Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum `json:"status"`
	Urn        *string                                                                                                                                   `json:"urn"`
}
