import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class GetArtifactRuleConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: GetArtifactRuleConfigRuleEnum;
}


export class GetArtifactRuleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactRuleConfigPathParams;
}


export class GetArtifactRuleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rule?: shared.Rule;

  @SpeakeasyMetadata()
  statusCode: number;
}
