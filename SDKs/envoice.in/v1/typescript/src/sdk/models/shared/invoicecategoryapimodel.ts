import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceCategoryApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
