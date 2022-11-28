import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaLayerVersionDetails
/** 
 * Details about a Lambda layer version.
**/
export class AwsLambdaLayerVersionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
