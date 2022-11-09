import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilterFileDataStoppingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class FilterFileDataStoppingsRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class FilterFileDataStoppingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: FilterFileDataStoppingsRequestBodyFile;
}


export class FilterFileDataStoppingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilterFileDataStoppingsPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: FilterFileDataStoppingsRequestBody;
}


export class FilterFileDataStoppingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exudeResponseBean?: any;

  @Metadata()
  statusCode: number;
}
