import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictResponse } from "./districtresponse";



export class DistrictsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: DistrictResponse })
  data?: DistrictResponse[];
}
