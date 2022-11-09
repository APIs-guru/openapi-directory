import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordOutput } from "./recordoutput";


export class GetProvisionedProductOutputsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=Outputs", elemType: shared.RecordOutput })
  outputs?: RecordOutput[];
}
