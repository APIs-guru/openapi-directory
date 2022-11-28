import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetadataProperties
/** 
 * Metadata properties of the tracking entity, trial, or trial component.
**/
export class MetadataProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=GeneratedBy" })
  generatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=Repository" })
  repository?: string;
}
