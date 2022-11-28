import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryCreateApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateApiVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_version_id" })
  apiVersionId?: string;
}


export class RegistryCreateApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryCreateApiVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryCreateApiVersionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiVersion?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
