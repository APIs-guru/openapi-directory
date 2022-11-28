import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchCampaignDonorsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.amount" })
  searchDbCampaignDonorsAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.city" })
  searchDbCampaignDonorsCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.committee" })
  searchDbCampaignDonorsCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.date" })
  searchDbCampaignDonorsDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.donor" })
  searchDbCampaignDonorsDonor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.employer" })
  searchDbCampaignDonorsEmployer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.gender" })
  searchDbCampaignDonorsGender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.location" })
  searchDbCampaignDonorsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.occupation" })
  searchDbCampaignDonorsOccupation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.party" })
  searchDbCampaignDonorsParty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.state" })
  searchDbCampaignDonorsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.zip_code" })
  searchDbCampaignDonorsZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCampaignDonorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCampaignDonorsQueryParams;
}


export class SearchCampaignDonorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
