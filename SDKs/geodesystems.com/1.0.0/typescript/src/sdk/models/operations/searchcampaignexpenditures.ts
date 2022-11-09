import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchCampaignExpendituresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.amount" })
  searchDbCampaignExpendituresAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.city" })
  searchDbCampaignExpendituresCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.committee" })
  searchDbCampaignExpendituresCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.location" })
  searchDbCampaignExpendituresLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.memo_text" })
  searchDbCampaignExpendituresMemoText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.party" })
  searchDbCampaignExpendituresParty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.purpose" })
  searchDbCampaignExpendituresPurpose?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.recipient" })
  searchDbCampaignExpendituresRecipient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.state" })
  searchDbCampaignExpendituresState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.transaction_date" })
  searchDbCampaignExpendituresTransactionDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.zip_code" })
  searchDbCampaignExpendituresZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCampaignExpendituresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCampaignExpendituresQueryParams;
}


export class SearchCampaignExpendituresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
