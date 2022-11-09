import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FunctionCodeLocation
/** 
 * Details about a function's deployment package.
**/
export class FunctionCodeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=RepositoryType" })
  repositoryType?: string;

  @Metadata({ data: "json, name=ResolvedImageUri" })
  resolvedImageUri?: string;
}
