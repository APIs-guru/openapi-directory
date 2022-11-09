import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigSnmptcp extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections?: number;
}
