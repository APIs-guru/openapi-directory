package shared



type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack struct {
    Channel string `json:"channel"`
    URL string `json:"url"`
    
}

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts struct {
    Email []string `json:"email"`
    Slack []Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack `json:"slack"`
    
}

