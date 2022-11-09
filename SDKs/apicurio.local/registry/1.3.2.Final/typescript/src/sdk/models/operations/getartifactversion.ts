import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArtifactVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class GetArtifactVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactVersionPathParams;
}


export class GetArtifactVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
