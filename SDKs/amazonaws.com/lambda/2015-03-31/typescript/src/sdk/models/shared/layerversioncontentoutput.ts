import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LayerVersionContentOutput
/** 
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayerVersionContentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @Metadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;
}
