import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Search2017BoulderElectionExpendituresQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.city" })
  searchDb2017BoulderElectionExpendituresCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.committee" })
  searchDb2017BoulderElectionExpendituresCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.expenditure" })
  searchDb2017BoulderElectionExpendituresExpenditure?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.name" })
  searchDb2017BoulderElectionExpendituresName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.purpose" })
  searchDb2017BoulderElectionExpendituresPurpose?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.state" })
  searchDb2017BoulderElectionExpendituresState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.street" })
  searchDb2017BoulderElectionExpendituresStreet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.transaction_date" })
  searchDb2017BoulderElectionExpendituresTransactionDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.zip" })
  searchDb2017BoulderElectionExpendituresZip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class Search2017BoulderElectionExpendituresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: Search2017BoulderElectionExpendituresQueryParams;
}


export class Search2017BoulderElectionExpendituresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
