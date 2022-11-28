import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventTrackerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
