import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchJeopardyQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_jeopardy.air_date" })
  searchDbJeopardyAirDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_jeopardy.answer" })
  searchDbJeopardyAnswer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_jeopardy.category" })
  searchDbJeopardyCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_jeopardy.question" })
  searchDbJeopardyQuestion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_jeopardy.round" })
  searchDbJeopardyRound?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchJeopardyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchJeopardyQueryParams;
}


export class SearchJeopardyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
