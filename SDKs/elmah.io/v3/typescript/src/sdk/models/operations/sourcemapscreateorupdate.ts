import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceMapsCreateOrUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=MinifiedJavaScript" })
  minifiedJavaScript: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SourceMapsCreateOrUpdateRequestBodySourceMap extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=SourceMap" })
  sourceMap: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SourceMapsCreateOrUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  minifiedJavaScript: SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript;

  @Metadata({ data: "multipart_form, name=Path" })
  path: string;

  @Metadata({ data: "multipart_form, file=true" })
  sourceMap: SourceMapsCreateOrUpdateRequestBodySourceMap;
}


export class SourceMapsCreateOrUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SourceMapsCreateOrUpdatePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SourceMapsCreateOrUpdateRequestBody;
}


export class SourceMapsCreateOrUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
