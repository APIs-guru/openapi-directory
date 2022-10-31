package operations

import (
	"time"
)

type SearchBoulderCountyVoterDetailsQueryParams struct {
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
	SearchDbBoulderCountyVoterDetailsBirthYear          *int64     `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.birth_year"`
	SearchDbBoulderCountyVoterDetailsCityWardDistrict   *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.city_ward_district"`
	SearchDbBoulderCountyVoterDetailsCongressional      *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.congressional"`
	SearchDbBoulderCountyVoterDetailsFirstName          *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.first_name"`
	SearchDbBoulderCountyVoterDetailsGender             *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.gender"`
	SearchDbBoulderCountyVoterDetailsLastName           *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.last_name"`
	SearchDbBoulderCountyVoterDetailsLastUpdatedDate    *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.last_updated_date"`
	SearchDbBoulderCountyVoterDetailsLocation           *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.location"`
	SearchDbBoulderCountyVoterDetailsMailingZipCode     *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.mailing_zip_code"`
	SearchDbBoulderCountyVoterDetailsMunicipality       *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.municipality"`
	SearchDbBoulderCountyVoterDetailsParty              *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.party"`
	SearchDbBoulderCountyVoterDetailsPrecinctCode       *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.precinct_code"`
	SearchDbBoulderCountyVoterDetailsRegistrationDate   *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.registration_date"`
	SearchDbBoulderCountyVoterDetailsResidentialAddress *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.residential_address"`
	SearchDbBoulderCountyVoterDetailsResidentialCity    *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.residential_city"`
	SearchDbBoulderCountyVoterDetailsSchoolDistrict     *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.school_district"`
	SearchDbBoulderCountyVoterDetailsStateHouse         *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.state_house"`
	SearchDbBoulderCountyVoterDetailsStateSenate        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.state_senate"`
	SearchDbBoulderCountyVoterDetailsVoterStatus        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_county_voter_details.voter_status"`
	Skip                                                *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                              *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchBoulderCountyVoterDetailsRequest struct {
	QueryParams SearchBoulderCountyVoterDetailsQueryParams
}

type SearchBoulderCountyVoterDetailsResponse struct {
	ContentType string
	StatusCode  int64
}
