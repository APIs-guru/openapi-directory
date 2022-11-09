import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvUpgradePlanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=planId" })
  planId: string;
}
