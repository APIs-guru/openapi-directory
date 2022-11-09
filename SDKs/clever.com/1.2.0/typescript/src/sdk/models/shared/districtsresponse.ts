import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistrictResponse } from "./districtresponse";


export class DistrictsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.DistrictResponse })
  data?: DistrictResponse[];
}
