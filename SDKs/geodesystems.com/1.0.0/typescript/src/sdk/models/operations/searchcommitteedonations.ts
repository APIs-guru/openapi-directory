import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchCommitteeDonationsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.amount" })
  searchDbCommitteeDonationsAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.city" })
  searchDbCommitteeDonationsCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.committee" })
  searchDbCommitteeDonationsCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.date" })
  searchDbCommitteeDonationsDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.employer" })
  searchDbCommitteeDonationsEmployer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.location" })
  searchDbCommitteeDonationsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.occupation" })
  searchDbCommitteeDonationsOccupation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.recipient" })
  searchDbCommitteeDonationsRecipient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.state" })
  searchDbCommitteeDonationsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_committee_donations.zip_code" })
  searchDbCommitteeDonationsZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCommitteeDonationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCommitteeDonationsQueryParams;
}


export class SearchCommitteeDonationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
