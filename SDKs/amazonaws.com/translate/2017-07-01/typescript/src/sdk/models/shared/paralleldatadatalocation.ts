import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParallelDataDataLocation
/** 
 * The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
**/
export class ParallelDataDataLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryType" })
  repositoryType: string;
}
