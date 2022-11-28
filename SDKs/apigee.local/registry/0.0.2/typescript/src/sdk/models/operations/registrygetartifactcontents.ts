import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryGetArtifactContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetArtifactContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryGetArtifactContentsPathParams;
}


export class RegistryGetArtifactContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
