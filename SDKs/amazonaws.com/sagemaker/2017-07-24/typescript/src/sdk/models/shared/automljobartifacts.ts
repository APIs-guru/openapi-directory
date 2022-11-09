import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlJobArtifacts
/** 
 * The artifacts that are generated during an AutoML job.
**/
export class AutoMlJobArtifacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=CandidateDefinitionNotebookLocation" })
  candidateDefinitionNotebookLocation?: string;

  @Metadata({ data: "json, name=DataExplorationNotebookLocation" })
  dataExplorationNotebookLocation?: string;
}
