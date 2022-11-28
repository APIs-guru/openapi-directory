import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteParallelDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
