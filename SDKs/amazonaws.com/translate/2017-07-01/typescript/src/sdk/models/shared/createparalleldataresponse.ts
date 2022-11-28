import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";



export class CreateParallelDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;
}
