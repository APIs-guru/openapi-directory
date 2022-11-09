import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteArtifactRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class DeleteArtifactRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteArtifactRulesPathParams;
}


export class DeleteArtifactRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
