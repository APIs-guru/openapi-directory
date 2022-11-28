import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=for_sale" })
  forSale?: string;
}
