import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBoulderCampaignContributionsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.amended_date" })
  searchDbBoulderCampaignContributionsAmendedDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.anonymous" })
  searchDbBoulderCampaignContributionsAnonymous?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.candidate" })
  searchDbBoulderCampaignContributionsCandidate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.city" })
  searchDbBoulderCampaignContributionsCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee" })
  searchDbBoulderCampaignContributionsCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee_num" })
  searchDbBoulderCampaignContributionsCommitteeNum?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution" })
  searchDbBoulderCampaignContributionsContribution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution_type" })
  searchDbBoulderCampaignContributionsContributionType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.filing_date" })
  searchDbBoulderCampaignContributionsFilingDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.first_name" })
  searchDbBoulderCampaignContributionsFirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.from_candidate" })
  searchDbBoulderCampaignContributionsFromCandidate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.last_name" })
  searchDbBoulderCampaignContributionsLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.match" })
  searchDbBoulderCampaignContributionsMatch?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.official_filing" })
  searchDbBoulderCampaignContributionsOfficialFiling?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.state" })
  searchDbBoulderCampaignContributionsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.street" })
  searchDbBoulderCampaignContributionsStreet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.transaction_date" })
  searchDbBoulderCampaignContributionsTransactionDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.type" })
  searchDbBoulderCampaignContributionsType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.zip" })
  searchDbBoulderCampaignContributionsZip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderCampaignContributionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBoulderCampaignContributionsQueryParams;
}


export class SearchBoulderCampaignContributionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
