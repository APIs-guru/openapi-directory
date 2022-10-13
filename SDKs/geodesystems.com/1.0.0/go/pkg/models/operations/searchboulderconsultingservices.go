package operations

import (
	"time"
)

type SearchBoulderConsultingServicesQueryParams struct {
	ChangedateFrom                                      *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                        *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                      *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                        *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                         *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                          *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                            *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                               *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                                 *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                         *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                        *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                         *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                        *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                                *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbBoulderConsultingServicesAccountDescription *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.account_description"`
	SearchDbBoulderConsultingServicesAmount             *float64   `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.amount"`
	SearchDbBoulderConsultingServicesComment            *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.comment"`
	SearchDbBoulderConsultingServicesDate               *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.date"`
	SearchDbBoulderConsultingServicesDepartment         *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.department"`
	SearchDbBoulderConsultingServicesFund               *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.fund"`
	SearchDbBoulderConsultingServicesObject             *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.object"`
	SearchDbBoulderConsultingServicesOrganization       *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.organization"`
	SearchDbBoulderConsultingServicesProject            *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.project"`
	SearchDbBoulderConsultingServicesPurchaseOrder      *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.purchase_order"`
	SearchDbBoulderConsultingServicesVendorName         *string    `queryParam:"style=form,explode=true,name=search.db_boulder_consulting_services.vendor_name"`
	Skip                                                *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                              *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchBoulderConsultingServicesRequest struct {
	QueryParams SearchBoulderConsultingServicesQueryParams
}

type SearchBoulderConsultingServicesResponse struct {
	ContentType string
	StatusCode  int64
}
