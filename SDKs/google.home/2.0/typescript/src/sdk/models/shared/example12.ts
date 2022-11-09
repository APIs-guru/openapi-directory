import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example12 extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;
}
