import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataProperties
/** 
 * Metadata properties of the tracking entity, trial, or trial component.
**/
export class MetadataProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommitId" })
  commitId?: string;

  @Metadata({ data: "json, name=GeneratedBy" })
  generatedBy?: string;

  @Metadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @Metadata({ data: "json, name=Repository" })
  repository?: string;
}
