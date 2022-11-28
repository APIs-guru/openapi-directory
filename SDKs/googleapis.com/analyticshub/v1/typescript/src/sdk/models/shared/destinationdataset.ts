import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationDatasetReference } from "./destinationdatasetreference";



// DestinationDataset
/** 
 * Defines the destination bigquery dataset.
**/
export class DestinationDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetReference" })
  datasetReference?: DestinationDatasetReference;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
