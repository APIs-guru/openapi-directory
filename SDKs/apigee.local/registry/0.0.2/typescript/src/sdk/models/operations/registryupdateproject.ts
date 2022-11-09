import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryUpdateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryUpdateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryUpdateProjectPathParams;

  @Metadata()
  queryParams: RegistryUpdateProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  project?: any;

  @Metadata()
  statusCode: number;
}
