import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Audio extends SpeakeasyBase {
  @Metadata({ data: "json, name=digital" })
  digital: boolean;
}
