import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryDeleteApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryDeleteApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryDeleteApiSpecPathParams;
}


export class RegistryDeleteApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
