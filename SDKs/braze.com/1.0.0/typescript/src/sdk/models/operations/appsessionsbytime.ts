import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppSessionsByTimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class AppSessionsByTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppSessionsByTimeQueryParams;
}


export class AppSessionsByTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
