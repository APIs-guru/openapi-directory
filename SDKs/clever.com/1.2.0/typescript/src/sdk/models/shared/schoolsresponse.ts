import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchoolResponse } from "./schoolresponse";


export class SchoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SchoolResponse })
  data?: SchoolResponse[];
}
