import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterSummary
/** 
 * A short summary of a filter's attributes.
**/
export class FilterSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
