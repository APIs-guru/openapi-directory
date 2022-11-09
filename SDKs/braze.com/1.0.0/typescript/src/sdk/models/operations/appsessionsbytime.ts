import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppSessionsByTimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class AppSessionsByTimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppSessionsByTimeQueryParams;
}


export class AppSessionsByTimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
