import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamic" })
  dynamic?: Map<string, any>;
}
