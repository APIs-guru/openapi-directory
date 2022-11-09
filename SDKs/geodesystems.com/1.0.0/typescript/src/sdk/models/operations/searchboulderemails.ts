import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBoulderEmailsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.email_subject" })
  searchDbBoulderEmailsEmailSubject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.plain_text_body" })
  searchDbBoulderEmailsPlainTextBody?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.received_date" })
  searchDbBoulderEmailsReceivedDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_cc" })
  searchDbBoulderEmailsSentCc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_from" })
  searchDbBoulderEmailsSentFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_emails.sent_to" })
  searchDbBoulderEmailsSentTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderEmailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBoulderEmailsQueryParams;
}


export class SearchBoulderEmailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
