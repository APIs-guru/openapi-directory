import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;
}
