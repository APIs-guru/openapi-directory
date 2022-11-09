import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryCreateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: string;
}


export class RegistryCreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RegistryCreateProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  project?: any;

  @Metadata()
  statusCode: number;
}
