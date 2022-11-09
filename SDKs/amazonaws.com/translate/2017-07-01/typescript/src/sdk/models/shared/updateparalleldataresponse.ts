import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";


export class UpdateParallelDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestUpdateAttemptAt" })
  latestUpdateAttemptAt?: Date;

  @Metadata({ data: "json, name=LatestUpdateAttemptStatus" })
  latestUpdateAttemptStatus?: ParallelDataStatusEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;
}
