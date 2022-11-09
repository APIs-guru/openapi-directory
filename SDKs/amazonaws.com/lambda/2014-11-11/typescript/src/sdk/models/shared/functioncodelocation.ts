import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FunctionCodeLocation
/** 
 * The object for the Lambda function location.
**/
export class FunctionCodeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=RepositoryType" })
  repositoryType?: string;
}
