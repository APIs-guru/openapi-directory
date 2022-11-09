import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArtifactVersionMetaDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class GetArtifactVersionMetaDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactVersionMetaDataPathParams;
}


export class GetArtifactVersionMetaDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionMetaData?: shared.VersionMetaData;
}
