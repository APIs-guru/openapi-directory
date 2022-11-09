import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchCommitteeDonationsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.amount" })
  searchDbCommitteeDonationsAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.city" })
  searchDbCommitteeDonationsCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.committee" })
  searchDbCommitteeDonationsCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.date" })
  searchDbCommitteeDonationsDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.employer" })
  searchDbCommitteeDonationsEmployer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.location" })
  searchDbCommitteeDonationsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.occupation" })
  searchDbCommitteeDonationsOccupation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.recipient" })
  searchDbCommitteeDonationsRecipient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.state" })
  searchDbCommitteeDonationsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.zip_code" })
  searchDbCommitteeDonationsZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCommitteeDonationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCommitteeDonationsQueryParams;
}


export class SearchCommitteeDonationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
