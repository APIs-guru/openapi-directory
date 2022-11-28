import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilterStoppingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class FilterStoppingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilterStoppingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class FilterStoppingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exudeResponseBean?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
