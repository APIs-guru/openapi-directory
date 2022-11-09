import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteArtifactRuleRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class DeleteArtifactRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: DeleteArtifactRuleRuleEnum;
}


export class DeleteArtifactRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteArtifactRulePathParams;
}


export class DeleteArtifactRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
