package operations

import (
	"time"
)

type SearchBoulderCampaignContributionsQueryParams struct {
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
	SearchDbBoulderCampaignContributionsAmendedDate      *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.amended_date"`
	SearchDbBoulderCampaignContributionsAnonymous        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.anonymous"`
	SearchDbBoulderCampaignContributionsCandidate        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.candidate"`
	SearchDbBoulderCampaignContributionsCity             *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.city"`
	SearchDbBoulderCampaignContributionsCommittee        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.committee"`
	SearchDbBoulderCampaignContributionsCommitteeNum     *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.committee_num"`
	SearchDbBoulderCampaignContributionsContribution     *float64   `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.contribution"`
	SearchDbBoulderCampaignContributionsContributionType *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.contribution_type"`
	SearchDbBoulderCampaignContributionsFilingDate       *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.filing_date"`
	SearchDbBoulderCampaignContributionsFirstName        *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.first_name"`
	SearchDbBoulderCampaignContributionsFromCandidate    *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.from_candidate"`
	SearchDbBoulderCampaignContributionsLastName         *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.last_name"`
	SearchDbBoulderCampaignContributionsMatch            *float64   `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.match"`
	SearchDbBoulderCampaignContributionsOfficialFiling   *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.official_filing"`
	SearchDbBoulderCampaignContributionsState            *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.state"`
	SearchDbBoulderCampaignContributionsStreet           *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.street"`
	SearchDbBoulderCampaignContributionsTransactionDate  *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.transaction_date"`
	SearchDbBoulderCampaignContributionsType             *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.type"`
	SearchDbBoulderCampaignContributionsZip              *string    `queryParam:"style=form,explode=true,name=search.db_boulder_campaign_contributions.zip"`
	Skip                                                 *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                 *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                               *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchBoulderCampaignContributionsRequest struct {
	QueryParams SearchBoulderCampaignContributionsQueryParams
}

type SearchBoulderCampaignContributionsResponse struct {
	ContentType string
	StatusCode  int64
}
