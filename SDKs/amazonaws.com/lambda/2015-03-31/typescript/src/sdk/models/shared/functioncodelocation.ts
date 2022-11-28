import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FunctionCodeLocation
/** 
 * Details about a function's deployment package.
**/
export class FunctionCodeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryType" })
  repositoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolvedImageUri" })
  resolvedImageUri?: string;
}
