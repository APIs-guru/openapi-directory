import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListArtifactVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class ListArtifactVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListArtifactVersionsPathParams;
}


export class ListArtifactVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  listArtifactVersions200ApplicationJsonInt64Integers?: number[];
}
