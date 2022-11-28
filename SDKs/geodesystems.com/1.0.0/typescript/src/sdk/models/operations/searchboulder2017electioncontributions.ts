import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBoulder2017ElectionContributionsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.amount" })
  searchDbBoulder2017ElectionContributionsAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.city" })
  searchDbBoulder2017ElectionContributionsCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.committee" })
  searchDbBoulder2017ElectionContributionsCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.contribution_type" })
  searchDbBoulder2017ElectionContributionsContributionType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.date" })
  searchDbBoulder2017ElectionContributionsDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.first_name" })
  searchDbBoulder2017ElectionContributionsFirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.from_candidate" })
  searchDbBoulder2017ElectionContributionsFromCandidate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.last_name" })
  searchDbBoulder2017ElectionContributionsLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.location" })
  searchDbBoulder2017ElectionContributionsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.match_amount" })
  searchDbBoulder2017ElectionContributionsMatchAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.state" })
  searchDbBoulder2017ElectionContributionsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.street" })
  searchDbBoulder2017ElectionContributionsStreet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.ytd_amount" })
  searchDbBoulder2017ElectionContributionsYtdAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.zip" })
  searchDbBoulder2017ElectionContributionsZip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulder2017ElectionContributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBoulder2017ElectionContributionsQueryParams;
}


export class SearchBoulder2017ElectionContributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
