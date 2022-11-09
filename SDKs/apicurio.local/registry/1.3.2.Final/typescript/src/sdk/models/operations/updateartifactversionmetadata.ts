import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateArtifactVersionMetaDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class UpdateArtifactVersionMetaDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactVersionMetaDataPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EditableMetaData;
}


export class UpdateArtifactVersionMetaDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
