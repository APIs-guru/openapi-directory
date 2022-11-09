import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistrictStatus } from "./districtstatus";


export class DistrictStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: DistrictStatus;
}
