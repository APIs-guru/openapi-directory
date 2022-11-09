import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventTrackerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
