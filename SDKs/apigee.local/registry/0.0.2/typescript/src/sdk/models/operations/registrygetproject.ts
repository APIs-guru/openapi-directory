import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetProjectPathParams;
}


export class RegistryGetProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
