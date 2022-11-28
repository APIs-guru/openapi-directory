import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchoolAdminResponse } from "./schooladminresponse";



export class SchoolAdminsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SchoolAdminResponse })
  data?: SchoolAdminResponse[];
}
