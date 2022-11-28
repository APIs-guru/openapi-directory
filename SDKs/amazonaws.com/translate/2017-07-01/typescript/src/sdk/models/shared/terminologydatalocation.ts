import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TerminologyDataLocation
/** 
 * The location of the custom terminology data.
**/
export class TerminologyDataLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryType" })
  repositoryType: string;
}
