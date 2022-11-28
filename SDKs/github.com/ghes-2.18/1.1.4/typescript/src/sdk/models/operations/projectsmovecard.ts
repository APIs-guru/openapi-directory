import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsMoveCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsMoveCardRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_id" })
  columnId?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: string;
}


export class ProjectsMoveCard403ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class ProjectsMoveCard403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ProjectsMoveCard403ApplicationJsonErrors })
  errors?: ProjectsMoveCard403ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCard503ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCard503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ProjectsMoveCard503ApplicationJsonErrors })
  errors?: ProjectsMoveCard503ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsMoveCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsMoveCardPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsMoveCardRequestBody;
}


export class ProjectsMoveCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsMoveCard201ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  projectsMoveCard403ApplicationJsonObject?: ProjectsMoveCard403ApplicationJson;

  @SpeakeasyMetadata()
  projectsMoveCard503ApplicationJsonObject?: ProjectsMoveCard503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
