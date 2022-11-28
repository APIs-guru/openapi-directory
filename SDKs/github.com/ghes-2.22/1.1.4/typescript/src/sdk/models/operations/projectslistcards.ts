import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsListCardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}

export enum ProjectsListCardsArchivedStateEnum {
    All = "all",
    Archived = "archived",
    NotArchived = "not_archived"
}


export class ProjectsListCardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived_state" })
  archivedState?: ProjectsListCardsArchivedStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ProjectsListCardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsListCardsPathParams;

  @SpeakeasyMetadata()
  queryParams: ProjectsListCardsQueryParams;
}


export class ProjectsListCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.ProjectCard })
  projectCards?: shared.ProjectCard[];
}
