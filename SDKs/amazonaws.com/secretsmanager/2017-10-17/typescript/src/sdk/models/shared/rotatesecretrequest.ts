import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";



export class RotateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
