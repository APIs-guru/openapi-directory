import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationDatasetReference
/** 
 * Contains the reference that identifies a destination bigquery dataset.
**/
export class DestinationDatasetReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
