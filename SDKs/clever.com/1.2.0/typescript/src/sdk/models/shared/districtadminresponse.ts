import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictAdmin } from "./districtadmin";



export class DistrictAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DistrictAdmin;
}
