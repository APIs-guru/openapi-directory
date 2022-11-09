import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealershipData } from "./dealershipdata";


export class DealershipDataPaginated extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealers", elemType: shared.DealershipData })
  dealers: DealershipData[];

  @Metadata({ data: "json, name=maxPages" })
  maxPages: number;

  @Metadata({ data: "json, name=page" })
  page: number;
}
