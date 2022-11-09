import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListArtifactRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class ListArtifactRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListArtifactRulesPathParams;
}


export class ListArtifactRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  ruleTypes?: shared.RuleTypeEnum[];

  @Metadata()
  statusCode: number;
}
