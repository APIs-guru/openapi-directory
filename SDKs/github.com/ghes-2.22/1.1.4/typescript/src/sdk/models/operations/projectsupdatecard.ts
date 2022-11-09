import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsUpdateCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsUpdateCardRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=note" })
  note?: string;
}


export class ProjectsUpdateCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsUpdateCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsUpdateCardRequestBody;
}


export class ProjectsUpdateCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectCard?: shared.ProjectCard;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
