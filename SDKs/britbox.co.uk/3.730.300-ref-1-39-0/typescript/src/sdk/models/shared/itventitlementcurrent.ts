import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvEntitlementCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;
}
