import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsDeleteCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsDeleteCard403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsDeleteCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsDeleteCardPathParams;
}


export class ProjectsDeleteCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsDeleteCard403ApplicationJsonObject?: ProjectsDeleteCard403ApplicationJson;
}
