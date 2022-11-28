import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";



export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints: Constraints;

  @SpeakeasyMetadata({ data: "json, name=deadline" })
  deadline: Date;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=playerContext" })
  playerContext?: PlayerContext;

  @SpeakeasyMetadata({ data: "json, name=requested" })
  requested: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
