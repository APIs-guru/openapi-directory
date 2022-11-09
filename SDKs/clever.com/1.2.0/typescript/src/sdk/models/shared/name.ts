import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=middle" })
  middle?: string;
}
