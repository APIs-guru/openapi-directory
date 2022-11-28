import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilterFileDataStoppingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class FilterFileDataStoppingsRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class FilterFileDataStoppingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: FilterFileDataStoppingsRequestBodyFile;
}


export class FilterFileDataStoppingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilterFileDataStoppingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: FilterFileDataStoppingsRequestBody;
}


export class FilterFileDataStoppingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exudeResponseBean?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
