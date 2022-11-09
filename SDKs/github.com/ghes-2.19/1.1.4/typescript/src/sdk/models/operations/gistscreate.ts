import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsCreateRequestBodyFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;
}

export enum GistsCreateRequestBodyPublic2Enum {
    True = "true"
,    False = "false"
}


export class GistsCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: operations.GistsCreateRequestBodyFiles })
  files: Map<string, GistsCreateRequestBodyFiles>;

  @Metadata({ data: "json, name=public" })
  public?: any;
}


export class GistsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: GistsCreateRequestBody;
}


export class GistsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistSimple?: shared.GistSimple;

  @Metadata()
  validationError?: shared.ValidationError;
}
