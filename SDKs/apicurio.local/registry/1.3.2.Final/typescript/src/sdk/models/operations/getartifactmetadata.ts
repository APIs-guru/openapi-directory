import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArtifactMetaDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class GetArtifactMetaDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactMetaDataPathParams;
}


export class GetArtifactMetaDataResponse extends SpeakeasyBase {
  @Metadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
