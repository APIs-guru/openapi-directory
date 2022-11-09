import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchoolAdminResponse } from "./schooladminresponse";


export class SchoolAdminsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SchoolAdminResponse })
  data?: SchoolAdminResponse[];
}
