package operations

import (
"openapi/pkg/models/shared")

type ProductOrderConciergeRequestBody struct {
    CompanyName *string `form:"name=companyName"`
    ContactEmail *string `form:"name=contactEmail"`
    ContactPhone *string `form:"name=contactPhone"`
    CostConfirmation *bool `form:"name=costConfirmation"`
    Country *string `form:"name=country"`
    FinancialData *bool `form:"name=financialData"`
    HistoricInformation *bool `form:"name=historicInformation"`
    InformationRequirements *string `form:"name=informationRequirements"`
    LocationInvestigation *bool `form:"name=locationInvestigation"`
    Priority *string `form:"name=priority"`
    RegisterData *bool `form:"name=registerData"`
    RegisterNumber *string `form:"name=registerNumber"`
    SubjectID *string `form:"name=subjectId"`
    
}

type ProductOrderConciergeSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ProductOrderConciergeRequest struct {
    Request *ProductOrderConciergeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security ProductOrderConciergeSecurity 
    
}

type ProductOrderConciergeResponse struct {
    ContentType string 
    ProductOrderConcierge200ApplicationJSONAny *interface{} 
    ProductOrderConciergeDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

