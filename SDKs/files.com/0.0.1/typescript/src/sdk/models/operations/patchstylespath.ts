import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchStylesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchStylesPathRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PatchStylesPathRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: PatchStylesPathRequestBodyFile;
}


export class PatchStylesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchStylesPathPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchStylesPathRequestBody;
}


export class PatchStylesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  styleEntity?: shared.StyleEntity;
}
