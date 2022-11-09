import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsListForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ProjectsListForOrgStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class ProjectsListForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForOrgStateEnum;
}


export class ProjectsListForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsListForOrgPathParams;

  @Metadata()
  queryParams: ProjectsListForOrgQueryParams;
}


export class ProjectsListForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
