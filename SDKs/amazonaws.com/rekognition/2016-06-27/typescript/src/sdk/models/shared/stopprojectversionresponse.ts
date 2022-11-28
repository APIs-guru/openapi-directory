import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";



export class StopProjectVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;
}
