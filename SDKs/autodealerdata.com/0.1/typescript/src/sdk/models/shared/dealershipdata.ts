import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DealershipData extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=dealerName" })
  dealerName: string;

  @Metadata({ data: "json, name=ids" })
  ids: number[];

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=zipCode" })
  zipCode: number;
}
