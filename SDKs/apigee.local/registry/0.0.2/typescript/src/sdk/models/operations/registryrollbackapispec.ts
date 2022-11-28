import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryRollbackApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryRollbackApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryRollbackApiSpecPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryRollbackApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiSpec?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
