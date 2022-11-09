import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetParallelDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
