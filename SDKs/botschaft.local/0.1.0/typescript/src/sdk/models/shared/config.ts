import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providers" })
  providers: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics: any[];
}
