import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetArtifactPathParams;
}


export class RegistryGetArtifactResponse extends SpeakeasyBase {
  @Metadata()
  artifact?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
