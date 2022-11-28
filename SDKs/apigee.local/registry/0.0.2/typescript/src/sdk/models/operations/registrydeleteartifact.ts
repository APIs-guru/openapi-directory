import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryDeleteArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryDeleteArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryDeleteArtifactPathParams;
}


export class RegistryDeleteArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
