import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtifactVersionMetaDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class GetArtifactVersionMetaDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactVersionMetaDataPathParams;
}


export class GetArtifactVersionMetaDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMetaData?: shared.VersionMetaData;
}
