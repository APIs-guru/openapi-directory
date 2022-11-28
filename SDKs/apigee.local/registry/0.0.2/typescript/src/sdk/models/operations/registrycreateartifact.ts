import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryCreateArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateArtifactQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artifact_id" })
  artifactId?: string;
}


export class RegistryCreateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryCreateArtifactPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryCreateArtifactQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifact?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
