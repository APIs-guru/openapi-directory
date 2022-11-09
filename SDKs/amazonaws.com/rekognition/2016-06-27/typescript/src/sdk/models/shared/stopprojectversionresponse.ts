import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";


export class StopProjectVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;
}
