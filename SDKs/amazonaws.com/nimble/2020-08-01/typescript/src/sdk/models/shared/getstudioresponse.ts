import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";



export class GetStudioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studio" })
  studio?: Studio;
}
