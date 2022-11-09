import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { District } from "./district";


export class DistrictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: District;
}
