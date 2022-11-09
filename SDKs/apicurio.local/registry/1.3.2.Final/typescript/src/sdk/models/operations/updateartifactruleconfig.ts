import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY"
,    Compatibility = "COMPATIBILITY"
}


export class UpdateArtifactRuleConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: UpdateArtifactRuleConfigRuleEnum;
}


export class UpdateArtifactRuleConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateArtifactRuleConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Rule;
}


export class UpdateArtifactRuleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  rule?: shared.Rule;

  @Metadata()
  statusCode: number;
}
