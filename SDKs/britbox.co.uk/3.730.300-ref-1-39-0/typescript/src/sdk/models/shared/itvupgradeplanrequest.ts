import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvUpgradePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId: string;
}
