import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryReplaceArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryReplaceArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryReplaceArtifactPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryReplaceArtifactResponse extends SpeakeasyBase {
  @Metadata()
  artifact?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
