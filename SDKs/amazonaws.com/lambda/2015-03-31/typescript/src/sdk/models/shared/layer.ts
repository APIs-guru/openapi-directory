import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Layer
/** 
 * An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class Layer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;
}
