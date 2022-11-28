import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsCreateRequestBodyFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;
}

export enum GistsCreateRequestBodyPublic2Enum {
    True = "true",
    False = "false"
}


export class GistsCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GistsCreateRequestBodyFiles })
  files: Map<string, GistsCreateRequestBodyFiles>;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: any;
}


export class GistsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GistsCreateRequestBody;
}


export class GistsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistSimple?: shared.GistSimple;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
