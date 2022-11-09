import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteArtifactVersionMetaDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class DeleteArtifactVersionMetaDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteArtifactVersionMetaDataPathParams;
}


export class DeleteArtifactVersionMetaDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
