import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArtifactMetaDataByGlobalIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=globalId" })
  globalId: number;
}


export class GetArtifactMetaDataByGlobalIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactMetaDataByGlobalIdPathParams;
}


export class GetArtifactMetaDataByGlobalIdResponse extends SpeakeasyBase {
  @Metadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
