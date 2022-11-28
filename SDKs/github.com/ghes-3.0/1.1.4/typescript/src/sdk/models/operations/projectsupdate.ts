import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum ProjectsUpdateRequestBodyOrganizationPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}


export class ProjectsUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_permission" })
  organizationPermission?: ProjectsUpdateRequestBodyOrganizationPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}


export class ProjectsUpdate403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsUpdateRequestBody;
}


export class ProjectsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  projectsUpdate403ApplicationJsonObject?: ProjectsUpdate403ApplicationJson;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
