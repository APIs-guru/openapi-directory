import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationDatasetReference } from "./destinationdatasetreference";


// DestinationDataset
/** 
 * Defines the destination bigquery dataset.
**/
export class DestinationDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetReference" })
  datasetReference?: DestinationDatasetReference;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
