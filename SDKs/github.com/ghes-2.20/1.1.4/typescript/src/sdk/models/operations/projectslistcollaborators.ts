import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsListCollaboratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum ProjectsListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}


export class ProjectsListCollaboratorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: ProjectsListCollaboratorsAffiliationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ProjectsListCollaborators415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsListCollaboratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsListCollaboratorsPathParams;

  @SpeakeasyMetadata()
  queryParams: ProjectsListCollaboratorsQueryParams;
}


export class ProjectsListCollaboratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsListCollaborators415ApplicationJsonObject?: ProjectsListCollaborators415ApplicationJson;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
