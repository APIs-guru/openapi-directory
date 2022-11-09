import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptIn1 } from "./optin1";
import { Settings1 } from "./settings1";


export class SetEurekaInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=opt_in" })
  optIn: OptIn1;

  @Metadata({ data: "json, name=settings" })
  settings: Settings1;
}
