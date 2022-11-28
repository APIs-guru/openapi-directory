import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FunctionCodeLocation
/** 
 * The object for the Lambda function location.
**/
export class FunctionCodeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryType" })
  repositoryType?: string;
}
