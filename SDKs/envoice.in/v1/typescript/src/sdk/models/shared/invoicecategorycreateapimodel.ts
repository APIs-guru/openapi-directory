import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceCategoryCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
