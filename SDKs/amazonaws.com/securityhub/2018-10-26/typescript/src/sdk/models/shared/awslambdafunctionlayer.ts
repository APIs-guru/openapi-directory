import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaFunctionLayer
/** 
 * An Lambda layer.
**/
export class AwsLambdaFunctionLayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;
}
