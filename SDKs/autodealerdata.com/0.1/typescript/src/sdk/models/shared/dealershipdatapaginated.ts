import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealershipData } from "./dealershipdata";



export class DealershipDataPaginated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealers", elemType: DealershipData })
  dealers: DealershipData[];

  @SpeakeasyMetadata({ data: "json, name=maxPages" })
  maxPages: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;
}
