import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistrictAdmin } from "./districtadmin";


export class DistrictAdminsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.DistrictAdmin })
  data?: DistrictAdmin[];
}
