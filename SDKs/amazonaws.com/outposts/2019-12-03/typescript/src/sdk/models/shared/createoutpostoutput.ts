import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Outpost } from "./outpost";


export class CreateOutpostOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Outpost" })
  outpost?: Outpost;
}
