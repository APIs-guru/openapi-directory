import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetArtifactContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetArtifactContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetArtifactContentsPathParams;
}


export class RegistryGetArtifactContentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
