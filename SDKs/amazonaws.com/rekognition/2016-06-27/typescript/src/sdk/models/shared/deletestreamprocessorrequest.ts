import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStreamProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
