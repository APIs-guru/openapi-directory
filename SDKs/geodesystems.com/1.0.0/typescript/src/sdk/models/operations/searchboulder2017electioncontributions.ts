import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBoulder2017ElectionContributionsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.amount" })
  searchDbBoulder2017ElectionContributionsAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.city" })
  searchDbBoulder2017ElectionContributionsCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.committee" })
  searchDbBoulder2017ElectionContributionsCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.contribution_type" })
  searchDbBoulder2017ElectionContributionsContributionType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.date" })
  searchDbBoulder2017ElectionContributionsDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.first_name" })
  searchDbBoulder2017ElectionContributionsFirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.from_candidate" })
  searchDbBoulder2017ElectionContributionsFromCandidate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.last_name" })
  searchDbBoulder2017ElectionContributionsLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.location" })
  searchDbBoulder2017ElectionContributionsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.match_amount" })
  searchDbBoulder2017ElectionContributionsMatchAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.state" })
  searchDbBoulder2017ElectionContributionsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.street" })
  searchDbBoulder2017ElectionContributionsStreet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.ytd_amount" })
  searchDbBoulder2017ElectionContributionsYtdAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.zip" })
  searchDbBoulder2017ElectionContributionsZip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulder2017ElectionContributionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBoulder2017ElectionContributionsQueryParams;
}


export class SearchBoulder2017ElectionContributionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
