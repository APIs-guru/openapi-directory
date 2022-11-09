import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Layer
/** 
 * An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class Layer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @Metadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @Metadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;
}
