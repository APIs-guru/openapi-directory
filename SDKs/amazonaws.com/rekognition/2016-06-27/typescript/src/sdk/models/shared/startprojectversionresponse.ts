import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";


export class StartProjectVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;
}
