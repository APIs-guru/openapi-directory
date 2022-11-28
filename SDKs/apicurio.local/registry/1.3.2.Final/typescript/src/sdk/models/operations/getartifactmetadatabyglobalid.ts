import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtifactMetaDataByGlobalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=globalId" })
  globalId: number;
}


export class GetArtifactMetaDataByGlobalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactMetaDataByGlobalIdPathParams;
}


export class GetArtifactMetaDataByGlobalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
