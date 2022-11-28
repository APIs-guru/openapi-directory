import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";



export class DeleteProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProjectStatusEnum;
}
