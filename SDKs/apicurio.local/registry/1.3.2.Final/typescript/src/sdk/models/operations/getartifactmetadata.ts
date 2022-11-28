import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtifactMetaDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class GetArtifactMetaDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactMetaDataPathParams;
}


export class GetArtifactMetaDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
