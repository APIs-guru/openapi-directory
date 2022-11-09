import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvGetDiscountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=headline" })
  headline?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=initialCost" })
  initialCost?: number;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=offerdurationperiod" })
  offerdurationperiod?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;
}
