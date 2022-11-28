import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryCreateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: string;
}


export class RegistryCreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RegistryCreateProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
