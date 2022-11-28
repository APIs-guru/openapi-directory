import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsGetCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: number;
}


export class ProjectsGetCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsGetCardPathParams;
}


export class ProjectsGetCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectCard?: shared.ProjectCard;
}
