import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBoulderCampaignContributionsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.amended_date" })
  searchDbBoulderCampaignContributionsAmendedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.anonymous" })
  searchDbBoulderCampaignContributionsAnonymous?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.candidate" })
  searchDbBoulderCampaignContributionsCandidate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.city" })
  searchDbBoulderCampaignContributionsCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee" })
  searchDbBoulderCampaignContributionsCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee_num" })
  searchDbBoulderCampaignContributionsCommitteeNum?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution" })
  searchDbBoulderCampaignContributionsContribution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution_type" })
  searchDbBoulderCampaignContributionsContributionType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.filing_date" })
  searchDbBoulderCampaignContributionsFilingDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.first_name" })
  searchDbBoulderCampaignContributionsFirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.from_candidate" })
  searchDbBoulderCampaignContributionsFromCandidate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.last_name" })
  searchDbBoulderCampaignContributionsLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.match" })
  searchDbBoulderCampaignContributionsMatch?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.official_filing" })
  searchDbBoulderCampaignContributionsOfficialFiling?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.state" })
  searchDbBoulderCampaignContributionsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.street" })
  searchDbBoulderCampaignContributionsStreet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.transaction_date" })
  searchDbBoulderCampaignContributionsTransactionDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.type" })
  searchDbBoulderCampaignContributionsType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.zip" })
  searchDbBoulderCampaignContributionsZip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderCampaignContributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBoulderCampaignContributionsQueryParams;
}


export class SearchBoulderCampaignContributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
