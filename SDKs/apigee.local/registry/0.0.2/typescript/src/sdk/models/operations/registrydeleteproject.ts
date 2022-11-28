import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryDeleteProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryDeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryDeleteProjectPathParams;
}


export class RegistryDeleteProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
