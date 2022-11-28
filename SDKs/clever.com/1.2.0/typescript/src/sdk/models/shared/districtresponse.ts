import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { District } from "./district";



export class DistrictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: District;
}
