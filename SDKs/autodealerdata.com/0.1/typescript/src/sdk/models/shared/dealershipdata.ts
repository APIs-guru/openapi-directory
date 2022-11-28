import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealershipData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=dealerName" })
  dealerName: string;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=zipCode" })
  zipCode: number;
}
