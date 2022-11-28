import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";



export class DeleteProjectVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;
}
