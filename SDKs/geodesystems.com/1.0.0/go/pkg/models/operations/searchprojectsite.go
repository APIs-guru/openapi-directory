package operations

import (
	"time"
)

type SearchProjectSiteQueryParams struct {
	ChangedateFrom             *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo               *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom             *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo               *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                 *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                   *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                      *string    `queryParam:"style=form,explode=true,name=group"`
	Max                        *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude               *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude               *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                       *string    `queryParam:"style=form,explode=true,name=name"`
	SearchProjectSiteCountry   *string    `queryParam:"style=form,explode=true,name=search.project_site.country"`
	SearchProjectSiteCounty    *string    `queryParam:"style=form,explode=true,name=search.project_site.county"`
	SearchProjectSiteNetwork   *string    `queryParam:"style=form,explode=true,name=search.project_site.network"`
	SearchProjectSiteShortName *string    `queryParam:"style=form,explode=true,name=search.project_site.short_name"`
	SearchProjectSiteSiteType  *string    `queryParam:"style=form,explode=true,name=search.project_site.site_type"`
	SearchProjectSiteState     *string    `queryParam:"style=form,explode=true,name=search.project_site.state"`
	SearchProjectSiteStatus    *string    `queryParam:"style=form,explode=true,name=search.project_site.status"`
	Skip                       *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                       *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                     *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchProjectSiteRequest struct {
	QueryParams SearchProjectSiteQueryParams
}

type SearchProjectSiteResponse struct {
	ContentType string
	StatusCode  int64
}
