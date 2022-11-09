import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryDeleteArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryDeleteArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryDeleteArtifactPathParams;
}


export class RegistryDeleteArtifactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
