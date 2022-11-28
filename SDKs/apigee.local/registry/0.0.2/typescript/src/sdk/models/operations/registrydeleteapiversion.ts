import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryDeleteApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryDeleteApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryDeleteApiVersionPathParams;
}


export class RegistryDeleteApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
