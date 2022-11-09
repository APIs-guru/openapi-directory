import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RotationRulesType } from "./rotationrulestype";


export class RotateSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @Metadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
