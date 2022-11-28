import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordOutput } from "./recordoutput";



export class GetProvisionedProductOutputsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: RecordOutput })
  outputs?: RecordOutput[];
}
