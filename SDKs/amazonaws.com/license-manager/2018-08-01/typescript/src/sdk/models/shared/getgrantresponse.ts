import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Grant } from "./grant";


export class GetGrantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Grant" })
  grant?: Grant;
}
