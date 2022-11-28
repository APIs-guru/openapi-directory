import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryUpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryUpdateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryUpdateProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryUpdateProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
