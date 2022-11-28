import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTerminologyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
