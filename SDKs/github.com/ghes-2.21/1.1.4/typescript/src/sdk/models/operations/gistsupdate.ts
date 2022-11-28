import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsUpdateRequestBodyFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;
}


export class GistsUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GistsUpdateRequestBodyFiles })
  files?: Map<string, GistsUpdateRequestBodyFiles>;
}


export class GistsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GistsUpdateRequestBody;
}


export class GistsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistSimple?: shared.GistSimple;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
