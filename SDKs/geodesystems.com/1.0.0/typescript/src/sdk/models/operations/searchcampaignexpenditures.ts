import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchCampaignExpendituresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.amount" })
  searchDbCampaignExpendituresAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.city" })
  searchDbCampaignExpendituresCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.committee" })
  searchDbCampaignExpendituresCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.location" })
  searchDbCampaignExpendituresLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.memo_text" })
  searchDbCampaignExpendituresMemoText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.party" })
  searchDbCampaignExpendituresParty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.purpose" })
  searchDbCampaignExpendituresPurpose?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.recipient" })
  searchDbCampaignExpendituresRecipient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.state" })
  searchDbCampaignExpendituresState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.transaction_date" })
  searchDbCampaignExpendituresTransactionDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_expenditures.zip_code" })
  searchDbCampaignExpendituresZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCampaignExpendituresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCampaignExpendituresQueryParams;
}


export class SearchCampaignExpendituresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
