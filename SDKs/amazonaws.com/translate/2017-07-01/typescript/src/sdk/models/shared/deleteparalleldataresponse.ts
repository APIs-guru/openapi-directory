import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";


export class DeleteParallelDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;
}
