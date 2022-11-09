import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParallelDataConfig } from "./paralleldataconfig";


export class UpdateParallelDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ParallelDataConfig" })
  parallelDataConfig: ParallelDataConfig;
}
