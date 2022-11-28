import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListArtifactRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class ListArtifactRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListArtifactRulesPathParams;
}


export class ListArtifactRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  ruleTypes?: shared.RuleTypeEnum[];

  @SpeakeasyMetadata()
  statusCode: number;
}
