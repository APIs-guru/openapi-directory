package operations

import (
	"time"
)

type SearchConstructionPermitsQueryParams struct {
	ChangedateFrom                                       *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                         *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                       *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                         *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                          *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                           *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                             *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                                *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                                  *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                          *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                         *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                          *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                         *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                                 *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbConstructionPermitsAddress                   *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.address"`
	SearchDbConstructionPermitsAffordableHsgUnit         *int64     `queryParam:"style=form,explode=true,name=search.db_construction_permits.affordable_hsg_unit"`
	SearchDbConstructionPermitsApplied                   *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.applied"`
	SearchDbConstructionPermitsApproved                  *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.approved"`
	SearchDbConstructionPermitsBuildingUsesAndWorkScopes *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.building_uses_and_work_scopes"`
	SearchDbConstructionPermitsCaseStatus                *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.case_status"`
	SearchDbConstructionPermitsCategory                  *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.category"`
	SearchDbConstructionPermitsCoDate                    *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.co_date"`
	SearchDbConstructionPermitsCompletionDate            *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.completion_date"`
	SearchDbConstructionPermitsContractorCompany         *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.contractor_company"`
	SearchDbConstructionPermitsContractorFirstName       *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.contractor_first_name"`
	SearchDbConstructionPermitsContractorLastName        *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.contractor_last_name"`
	SearchDbConstructionPermitsExistingResUnit           *int64     `queryParam:"style=form,explode=true,name=search.db_construction_permits.existing_res_unit"`
	SearchDbConstructionPermitsIssued                    *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.issued"`
	SearchDbConstructionPermitsNarrativeDescription      *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.narrative_description"`
	SearchDbConstructionPermitsNewResUnit                *int64     `queryParam:"style=form,explode=true,name=search.db_construction_permits.new_res_unit"`
	SearchDbConstructionPermitsNewSf                     *int64     `queryParam:"style=form,explode=true,name=search.db_construction_permits.new_sf"`
	SearchDbConstructionPermitsOwner1Company             *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner1_company"`
	SearchDbConstructionPermitsOwner1FirstName           *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner1_first_name"`
	SearchDbConstructionPermitsOwner1LastName            *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner1_last_name"`
	SearchDbConstructionPermitsOwner2Company             *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner2_company"`
	SearchDbConstructionPermitsOwner2FirstName           *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner2_first_name"`
	SearchDbConstructionPermitsOwner2LastName            *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.owner2_last_name"`
	SearchDbConstructionPermitsPermitTypes               *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.permit_types"`
	SearchDbConstructionPermitsPrimaryCompany            *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.primary_company"`
	SearchDbConstructionPermitsPrimaryFirstName          *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.primary_first_name"`
	SearchDbConstructionPermitsPrimaryLastName           *string    `queryParam:"style=form,explode=true,name=search.db_construction_permits.primary_last_name"`
	SearchDbConstructionPermitsRemodelSf                 *int64     `queryParam:"style=form,explode=true,name=search.db_construction_permits.remodel_sf"`
	SearchDbConstructionPermitsTotalProjectValue         *float64   `queryParam:"style=form,explode=true,name=search.db_construction_permits.total_project_value"`
	SearchDbConstructionPermitsTotalSubpermitValue       *float64   `queryParam:"style=form,explode=true,name=search.db_construction_permits.total_subpermit_value"`
	Skip                                                 *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                 *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                               *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchConstructionPermitsRequest struct {
	QueryParams SearchConstructionPermitsQueryParams
}

type SearchConstructionPermitsResponse struct {
	ContentType string
	StatusCode  int64
}
