import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Artist extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
