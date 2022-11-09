import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryCreateArtifactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateArtifactQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=artifact_id" })
  artifactId?: string;
}


export class RegistryCreateArtifactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryCreateArtifactPathParams;

  @Metadata()
  queryParams: RegistryCreateArtifactQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateArtifactResponse extends SpeakeasyBase {
  @Metadata()
  artifact?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
