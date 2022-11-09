import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";


export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints" })
  constraints: Constraints;

  @Metadata({ data: "json, name=deadline" })
  deadline: Date;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=playerContext" })
  playerContext?: PlayerContext;

  @Metadata({ data: "json, name=requested" })
  requested: Date;

  @Metadata({ data: "json, name=version" })
  version: string;
}
