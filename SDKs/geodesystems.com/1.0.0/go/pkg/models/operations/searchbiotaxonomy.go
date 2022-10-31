package operations

import (
	"time"
)

type SearchBioTaxonomyQueryParams struct {
	ChangedateFrom                *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                  *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                  *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                   *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                    *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                      *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                         *string    `queryParam:"style=form,explode=true,name=group"`
	Max                           *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                   *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                  *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                   *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                  *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                          *string    `queryParam:"style=form,explode=true,name=name"`
	SearchBioTaxonomyAliases      *string    `queryParam:"style=form,explode=true,name=search.bio_taxonomy.aliases"`
	SearchBioTaxonomyDivision     *string    `queryParam:"style=form,explode=true,name=search.bio_taxonomy.division"`
	SearchBioTaxonomyEmblCode     *string    `queryParam:"style=form,explode=true,name=search.bio_taxonomy.embl_code"`
	SearchBioTaxonomyInheritedDiv *bool      `queryParam:"style=form,explode=true,name=search.bio_taxonomy.inherited_div"`
	SearchBioTaxonomyRank         *string    `queryParam:"style=form,explode=true,name=search.bio_taxonomy.rank"`
	Skip                          *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                          *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                        *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchBioTaxonomyRequest struct {
	QueryParams SearchBioTaxonomyQueryParams
}

type SearchBioTaxonomyResponse struct {
	ContentType string
	StatusCode  int64
}
