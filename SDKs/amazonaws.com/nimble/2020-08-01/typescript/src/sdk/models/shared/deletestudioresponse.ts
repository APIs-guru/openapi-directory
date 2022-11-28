import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";



export class DeleteStudioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studio" })
  studio?: Studio;
}
