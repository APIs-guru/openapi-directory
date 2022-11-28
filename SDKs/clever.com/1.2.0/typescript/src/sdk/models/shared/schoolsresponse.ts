import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchoolResponse } from "./schoolresponse";



export class SchoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SchoolResponse })
  data?: SchoolResponse[];
}
