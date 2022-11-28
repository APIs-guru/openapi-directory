import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryUpdateApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryUpdateApiSpecQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow_missing" })
  allowMissing?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryUpdateApiSpecPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryUpdateApiSpecQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiSpec?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
