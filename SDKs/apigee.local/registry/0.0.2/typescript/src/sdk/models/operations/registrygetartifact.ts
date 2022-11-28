import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetArtifactPathParams;
}


export class RegistryGetArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifact?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
