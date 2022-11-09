import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistrictAdmin } from "./districtadmin";


export class DistrictAdminResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: DistrictAdmin;
}
