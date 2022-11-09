import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";


export class DeleteProjectVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;
}
