import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TerminologyDataLocation
/** 
 * The location of the custom terminology data.
**/
export class TerminologyDataLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Location" })
  location: string;

  @Metadata({ data: "json, name=RepositoryType" })
  repositoryType: string;
}
