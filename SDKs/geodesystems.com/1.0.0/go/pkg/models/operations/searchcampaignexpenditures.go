package operations

import (
	"time"
)

type SearchCampaignExpendituresQueryParams struct {
	ChangedateFrom                              *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                              *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                 *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                  *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                    *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                       *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                         *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                 *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                 *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                        *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbCampaignExpendituresAmount          *float64   `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.amount"`
	SearchDbCampaignExpendituresCity            *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.city"`
	SearchDbCampaignExpendituresCommittee       *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.committee"`
	SearchDbCampaignExpendituresLocation        *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.location"`
	SearchDbCampaignExpendituresMemoText        *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.memo_text"`
	SearchDbCampaignExpendituresParty           *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.party"`
	SearchDbCampaignExpendituresPurpose         *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.purpose"`
	SearchDbCampaignExpendituresRecipient       *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.recipient"`
	SearchDbCampaignExpendituresState           *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.state"`
	SearchDbCampaignExpendituresTransactionDate *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.transaction_date"`
	SearchDbCampaignExpendituresZipCode         *string    `queryParam:"style=form,explode=true,name=search.db_campaign_expenditures.zip_code"`
	Skip                                        *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                        *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                      *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchCampaignExpendituresRequest struct {
	QueryParams SearchCampaignExpendituresQueryParams
}

type SearchCampaignExpendituresResponse struct {
	ContentType string
	StatusCode  int64
}
