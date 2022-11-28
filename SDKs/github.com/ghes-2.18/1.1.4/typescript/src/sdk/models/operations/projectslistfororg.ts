import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsListForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ProjectsListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class ProjectsListForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForOrgStateEnum;
}


export class ProjectsListForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsListForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ProjectsListForOrgQueryParams;
}


export class ProjectsListForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
