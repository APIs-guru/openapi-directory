import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LayerVersionContentOutput
/** 
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayerVersionContentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;
}
