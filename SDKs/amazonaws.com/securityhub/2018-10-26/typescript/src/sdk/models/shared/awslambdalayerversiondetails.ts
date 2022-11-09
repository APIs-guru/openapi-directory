import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaLayerVersionDetails
/** 
 * Details about a Lambda layer version.
**/
export class AwsLambdaLayerVersionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: string[];

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
