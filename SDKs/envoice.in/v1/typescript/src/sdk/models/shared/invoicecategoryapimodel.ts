import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvoiceCategoryApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
