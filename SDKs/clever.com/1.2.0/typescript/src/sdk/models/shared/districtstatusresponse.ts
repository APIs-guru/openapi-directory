import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictStatus } from "./districtstatus";



export class DistrictStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DistrictStatus;
}
