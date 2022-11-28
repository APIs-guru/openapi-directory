import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchStylesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchStylesPathRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PatchStylesPathRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PatchStylesPathRequestBodyFile;
}


export class PatchStylesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchStylesPathPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchStylesPathRequestBody;
}


export class PatchStylesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  styleEntity?: shared.StyleEntity;
}
