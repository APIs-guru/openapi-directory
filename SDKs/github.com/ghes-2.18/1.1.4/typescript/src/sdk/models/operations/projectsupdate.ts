import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum ProjectsUpdateRequestBodyOrganizationPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
,    None = "none"
}


export class ProjectsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_permission" })
  organizationPermission?: ProjectsUpdateRequestBodyOrganizationPermissionEnum;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: string;
}


export class ProjectsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsUpdateRequestBody;
}


export class ProjectsUpdate403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  projectsUpdate403ApplicationJsonObject?: ProjectsUpdate403ApplicationJson;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
