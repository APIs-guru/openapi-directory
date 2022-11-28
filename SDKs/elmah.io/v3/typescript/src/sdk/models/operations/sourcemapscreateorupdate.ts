import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceMapsCreateOrUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=MinifiedJavaScript" })
  minifiedJavaScript: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SourceMapsCreateOrUpdateRequestBodySourceMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=SourceMap" })
  sourceMap: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class SourceMapsCreateOrUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  minifiedJavaScript: SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript;

  @SpeakeasyMetadata({ data: "multipart_form, name=Path" })
  path: string;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  sourceMap: SourceMapsCreateOrUpdateRequestBodySourceMap;
}


export class SourceMapsCreateOrUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SourceMapsCreateOrUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SourceMapsCreateOrUpdateRequestBody;
}


export class SourceMapsCreateOrUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
