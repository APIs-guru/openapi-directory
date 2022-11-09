import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsDeleteCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsDeleteCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsDeleteCardPathParams;
}


export class ProjectsDeleteCard403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsDeleteCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsDeleteCard403ApplicationJsonObject?: ProjectsDeleteCard403ApplicationJson;
}
