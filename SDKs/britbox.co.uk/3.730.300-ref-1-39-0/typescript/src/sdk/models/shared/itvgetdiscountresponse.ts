import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvGetDiscountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=initialCost" })
  initialCost?: number;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=offerdurationperiod" })
  offerdurationperiod?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;
}
