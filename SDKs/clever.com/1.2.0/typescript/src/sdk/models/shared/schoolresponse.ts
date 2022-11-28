import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { School } from "./school";



export class SchoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: School;
}
