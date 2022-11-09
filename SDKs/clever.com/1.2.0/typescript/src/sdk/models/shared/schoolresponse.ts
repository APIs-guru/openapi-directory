import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { School } from "./school";


export class SchoolResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: School;
}
