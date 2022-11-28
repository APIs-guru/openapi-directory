import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Outpost } from "./outpost";



export class CreateOutpostOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Outpost" })
  outpost?: Outpost;
}
