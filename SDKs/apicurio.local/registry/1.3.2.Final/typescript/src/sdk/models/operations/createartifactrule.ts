import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateArtifactRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class CreateArtifactRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateArtifactRulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Rule;
}


export class CreateArtifactRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
