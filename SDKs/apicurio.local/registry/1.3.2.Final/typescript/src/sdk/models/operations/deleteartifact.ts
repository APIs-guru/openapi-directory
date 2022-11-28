import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class DeleteArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteArtifactPathParams;
}


export class DeleteArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
