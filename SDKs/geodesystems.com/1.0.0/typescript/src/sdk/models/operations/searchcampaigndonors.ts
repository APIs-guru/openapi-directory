import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchCampaignDonorsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.amount" })
  searchDbCampaignDonorsAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.city" })
  searchDbCampaignDonorsCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.committee" })
  searchDbCampaignDonorsCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.date" })
  searchDbCampaignDonorsDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.donor" })
  searchDbCampaignDonorsDonor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.employer" })
  searchDbCampaignDonorsEmployer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.gender" })
  searchDbCampaignDonorsGender?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.location" })
  searchDbCampaignDonorsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.occupation" })
  searchDbCampaignDonorsOccupation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.party" })
  searchDbCampaignDonorsParty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.state" })
  searchDbCampaignDonorsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_campaign_donors.zip_code" })
  searchDbCampaignDonorsZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCampaignDonorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCampaignDonorsQueryParams;
}


export class SearchCampaignDonorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
