import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchoolAdmin } from "./schooladmin";



export class SchoolAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SchoolAdmin;
}
