import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptIn1 } from "./optin1";
import { Settings1 } from "./settings1";



export class SetEurekaInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=opt_in" })
  optIn: OptIn1;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: Settings1;
}
