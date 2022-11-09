import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilterStoppingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class FilterStoppingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilterStoppingsPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class FilterStoppingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exudeResponseBean?: any;

  @Metadata()
  statusCode: number;
}
