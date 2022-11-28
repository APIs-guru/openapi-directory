import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryReplaceArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifact" })
  artifact: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryReplaceArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryReplaceArtifactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryReplaceArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifact?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
