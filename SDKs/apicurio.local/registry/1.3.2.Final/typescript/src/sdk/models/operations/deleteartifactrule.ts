import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteArtifactRuleRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}


export class DeleteArtifactRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: DeleteArtifactRuleRuleEnum;
}


export class DeleteArtifactRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteArtifactRulePathParams;
}


export class DeleteArtifactRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
