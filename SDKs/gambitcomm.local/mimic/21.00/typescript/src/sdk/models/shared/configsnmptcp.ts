import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigSnmptcp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections?: number;
}
