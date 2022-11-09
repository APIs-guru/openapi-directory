import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsListCollaboratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum ProjectsListCollaboratorsAffiliationEnum {
    Outside = "outside"
,    Direct = "direct"
,    All = "all"
}


export class ProjectsListCollaboratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: ProjectsListCollaboratorsAffiliationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ProjectsListCollaboratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsListCollaboratorsPathParams;

  @Metadata()
  queryParams: ProjectsListCollaboratorsQueryParams;
}


export class ProjectsListCollaborators415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsListCollaboratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsListCollaborators415ApplicationJsonObject?: ProjectsListCollaborators415ApplicationJson;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @Metadata()
  validationError?: shared.ValidationError;
}
