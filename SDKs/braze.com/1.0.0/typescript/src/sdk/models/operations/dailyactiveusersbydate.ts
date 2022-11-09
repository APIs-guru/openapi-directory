import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DailyActiveUsersByDateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class DailyActiveUsersByDateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DailyActiveUsersByDateQueryParams;
}


export class DailyActiveUsersByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
