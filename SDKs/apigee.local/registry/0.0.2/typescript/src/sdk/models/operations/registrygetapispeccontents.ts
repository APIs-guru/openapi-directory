import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetApiSpecContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryGetApiSpecContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetApiSpecContentsPathParams;
}


export class RegistryGetApiSpecContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
