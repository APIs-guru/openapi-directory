import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteParallelDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
