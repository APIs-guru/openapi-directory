import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Search2017BoulderElectionExpendituresQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.city" })
  searchDb2017BoulderElectionExpendituresCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.committee" })
  searchDb2017BoulderElectionExpendituresCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.expenditure" })
  searchDb2017BoulderElectionExpendituresExpenditure?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.name" })
  searchDb2017BoulderElectionExpendituresName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.purpose" })
  searchDb2017BoulderElectionExpendituresPurpose?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.state" })
  searchDb2017BoulderElectionExpendituresState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.street" })
  searchDb2017BoulderElectionExpendituresStreet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.transaction_date" })
  searchDb2017BoulderElectionExpendituresTransactionDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_2017_boulder_election_expenditures.zip" })
  searchDb2017BoulderElectionExpendituresZip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class Search2017BoulderElectionExpendituresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: Search2017BoulderElectionExpendituresQueryParams;
}


export class Search2017BoulderElectionExpendituresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
