import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlJobArtifacts
/** 
 * The artifacts that are generated during an AutoML job.
**/
export class AutoMlJobArtifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CandidateDefinitionNotebookLocation" })
  candidateDefinitionNotebookLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=DataExplorationNotebookLocation" })
  dataExplorationNotebookLocation?: string;
}
