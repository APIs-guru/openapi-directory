import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetApiPathParams;
}


export class RegistryGetApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
