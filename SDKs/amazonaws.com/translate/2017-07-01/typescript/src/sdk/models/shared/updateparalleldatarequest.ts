import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataConfig } from "./paralleldataconfig";



export class UpdateParallelDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataConfig" })
  parallelDataConfig: ParallelDataConfig;
}
