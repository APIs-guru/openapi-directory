import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictAdmin } from "./districtadmin";



export class DistrictAdminsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: DistrictAdmin })
  data?: DistrictAdmin[];
}
