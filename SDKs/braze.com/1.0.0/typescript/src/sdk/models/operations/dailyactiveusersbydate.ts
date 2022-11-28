import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DailyActiveUsersByDateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class DailyActiveUsersByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DailyActiveUsersByDateQueryParams;
}


export class DailyActiveUsersByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
