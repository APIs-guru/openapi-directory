import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBoulderEmailsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.email_subject" })
  searchDbBoulderEmailsEmailSubject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.plain_text_body" })
  searchDbBoulderEmailsPlainTextBody?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.received_date" })
  searchDbBoulderEmailsReceivedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_cc" })
  searchDbBoulderEmailsSentCc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_from" })
  searchDbBoulderEmailsSentFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_to" })
  searchDbBoulderEmailsSentTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderEmailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBoulderEmailsQueryParams;
}


export class SearchBoulderEmailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
