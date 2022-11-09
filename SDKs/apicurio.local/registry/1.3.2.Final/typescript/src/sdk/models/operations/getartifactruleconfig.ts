import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class GetArtifactRuleConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: GetArtifactRuleConfigRuleEnum;
}


export class GetArtifactRuleConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactRuleConfigPathParams;
}


export class GetArtifactRuleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  rule?: shared.Rule;

  @Metadata()
  statusCode: number;
}
