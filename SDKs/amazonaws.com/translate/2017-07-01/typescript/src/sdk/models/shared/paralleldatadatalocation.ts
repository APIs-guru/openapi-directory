import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParallelDataDataLocation
/** 
 * The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
**/
export class ParallelDataDataLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Location" })
  location: string;

  @Metadata({ data: "json, name=RepositoryType" })
  repositoryType: string;
}
