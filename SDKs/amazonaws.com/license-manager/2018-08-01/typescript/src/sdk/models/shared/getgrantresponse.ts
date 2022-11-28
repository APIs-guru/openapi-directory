import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";



export class GetGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Grant" })
  grant?: Grant;
}
