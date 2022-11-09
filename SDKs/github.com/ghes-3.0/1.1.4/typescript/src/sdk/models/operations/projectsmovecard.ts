import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsMoveCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsMoveCardRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_id" })
  columnId?: number;

  @Metadata({ data: "json, name=position" })
  position: string;
}


export class ProjectsMoveCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsMoveCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsMoveCardRequestBody;
}


export class ProjectsMoveCard403ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class ProjectsMoveCard403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors", elemType: operations.ProjectsMoveCard403ApplicationJsonErrors })
  errors?: ProjectsMoveCard403ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCard503ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCard503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors", elemType: operations.ProjectsMoveCard503ApplicationJsonErrors })
  errors?: ProjectsMoveCard503ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsMoveCard201ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  projectsMoveCard403ApplicationJsonObject?: ProjectsMoveCard403ApplicationJson;

  @Metadata()
  projectsMoveCard503ApplicationJsonObject?: ProjectsMoveCard503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
