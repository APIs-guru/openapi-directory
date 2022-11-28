import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationDatasetReference
/** 
 * Contains the reference that identifies a destination bigquery dataset.
**/
export class DestinationDatasetReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
