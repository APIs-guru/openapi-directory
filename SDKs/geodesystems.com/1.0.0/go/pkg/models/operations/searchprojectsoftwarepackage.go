package operations

import (
	"time"
)

type SearchProjectSoftwarepackageQueryParams struct {
	ChangedateFrom                           *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                             *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                           *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                             *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                              *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                               *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                 *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                    *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                      *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                              *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                             *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                              *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                             *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                     *string    `queryParam:"style=form,explode=true,name=name"`
	SearchProjectSoftwarepackageCapabilities *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.capabilities"`
	SearchProjectSoftwarepackageDomain       *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.domain"`
	SearchProjectSoftwarepackageLicense      *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.license"`
	SearchProjectSoftwarepackagePlatform     *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.platform"`
	SearchProjectSoftwarepackageSoftwareType *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.software_type"`
	SearchProjectSoftwarepackageSoftwareUse  *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.software_use"`
	SearchProjectSoftwarepackageStatus       *string    `queryParam:"style=form,explode=true,name=search.project_softwarepackage.status"`
	Skip                                     *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                     *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                   *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchProjectSoftwarepackageRequest struct {
	QueryParams SearchProjectSoftwarepackageQueryParams
}

type SearchProjectSoftwarepackageResponse struct {
	ContentType string
	StatusCode  int64
}
