import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictStatusResponse } from "./districtstatusresponse";



export class DistrictStatusResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: DistrictStatusResponse })
  data?: DistrictStatusResponse[];
}
