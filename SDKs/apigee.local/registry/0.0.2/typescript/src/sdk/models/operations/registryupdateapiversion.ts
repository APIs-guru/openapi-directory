import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryUpdateApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryUpdateApiVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryUpdateApiVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryUpdateApiVersionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiVersion?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
