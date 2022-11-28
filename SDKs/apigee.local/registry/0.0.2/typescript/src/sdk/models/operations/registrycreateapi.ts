import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryCreateApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateApiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_id" })
  apiId?: string;
}


export class RegistryCreateApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryCreateApiPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryCreateApiQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
