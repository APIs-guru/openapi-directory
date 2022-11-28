import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateArtifactVersionMetaDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class UpdateArtifactVersionMetaDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactVersionMetaDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EditableMetaData;
}


export class UpdateArtifactVersionMetaDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
