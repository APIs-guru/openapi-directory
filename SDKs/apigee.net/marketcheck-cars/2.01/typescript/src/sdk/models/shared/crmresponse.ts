import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CrmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=for_sale" })
  forSale?: string;
}
