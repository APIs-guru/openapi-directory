import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateArtifactMetaDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class UpdateArtifactMetaDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactMetaDataPathParams;

  @Metadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class UpdateArtifactMetaDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
