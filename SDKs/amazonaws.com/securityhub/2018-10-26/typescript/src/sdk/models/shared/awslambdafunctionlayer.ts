import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaFunctionLayer
/** 
 * An Lambda layer.
**/
export class AwsLambdaFunctionLayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;
}
