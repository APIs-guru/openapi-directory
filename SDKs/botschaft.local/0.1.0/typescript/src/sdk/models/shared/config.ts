import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=providers" })
  providers: Map<string, any>;

  @Metadata({ data: "json, name=topics" })
  topics: any[];
}
