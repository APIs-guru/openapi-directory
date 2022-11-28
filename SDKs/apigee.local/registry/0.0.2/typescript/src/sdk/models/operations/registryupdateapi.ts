import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryUpdateApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryUpdateApiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryUpdateApiPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryUpdateApiQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
