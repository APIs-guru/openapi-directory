import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryGetApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetApiSpecPathParams;
}


export class RegistryGetApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiSpec?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
