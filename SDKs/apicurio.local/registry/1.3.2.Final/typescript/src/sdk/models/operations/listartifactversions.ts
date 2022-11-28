import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListArtifactVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class ListArtifactVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListArtifactVersionsPathParams;
}


export class ListArtifactVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listArtifactVersions200ApplicationJsonInt64Integers?: number[];
}
