import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchoolAdmin } from "./schooladmin";


export class SchoolAdminResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: SchoolAdmin;
}
