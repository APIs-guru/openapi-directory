import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DailyNewUsersByDateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class DailyNewUsersByDateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DailyNewUsersByDateQueryParams;
}


export class DailyNewUsersByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
