import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryCreateApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryCreateApiSpecQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_spec_id" })
  apiSpecId?: string;
}


export class RegistryCreateApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryCreateApiSpecPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryCreateApiSpecQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiSpec?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
