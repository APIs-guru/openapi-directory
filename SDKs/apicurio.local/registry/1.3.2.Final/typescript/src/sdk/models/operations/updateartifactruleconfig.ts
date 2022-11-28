import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class UpdateArtifactRuleConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: UpdateArtifactRuleConfigRuleEnum;
}


export class UpdateArtifactRuleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactRuleConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Rule;
}


export class UpdateArtifactRuleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rule?: shared.Rule;

  @SpeakeasyMetadata()
  statusCode: number;
}
