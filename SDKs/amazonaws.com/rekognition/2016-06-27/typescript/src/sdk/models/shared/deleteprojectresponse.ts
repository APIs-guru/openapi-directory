import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectStatusEnum } from "./projectstatusenum";


export class DeleteProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ProjectStatusEnum;
}
