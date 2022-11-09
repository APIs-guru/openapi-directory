import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Studio } from "./studio";


export class UpdateStudioResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=studio" })
  studio?: Studio;
}
