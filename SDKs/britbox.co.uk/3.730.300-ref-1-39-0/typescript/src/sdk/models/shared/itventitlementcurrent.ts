import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvEntitlementCurrent extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: string;
}
