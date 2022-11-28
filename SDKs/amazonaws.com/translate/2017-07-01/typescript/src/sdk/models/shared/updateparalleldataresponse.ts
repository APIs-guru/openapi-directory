import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";



export class UpdateParallelDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptAt" })
  latestUpdateAttemptAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptStatus" })
  latestUpdateAttemptStatus?: ParallelDataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;
}
