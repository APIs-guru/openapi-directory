import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DailyNewUsersByDateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class DailyNewUsersByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DailyNewUsersByDateQueryParams;
}


export class DailyNewUsersByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
