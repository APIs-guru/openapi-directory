import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsUpdateRequestBodyFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;
}


export class GistsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: operations.GistsUpdateRequestBodyFiles })
  files?: Map<string, GistsUpdateRequestBodyFiles>;
}


export class GistsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GistsUpdateRequestBody;
}


export class GistsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistSimple?: shared.GistSimple;

  @Metadata()
  validationError?: shared.ValidationError;
}
