import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistrictStatusResponse } from "./districtstatusresponse";


export class DistrictStatusResponses extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.DistrictStatusResponse })
  data?: DistrictStatusResponse[];
}
