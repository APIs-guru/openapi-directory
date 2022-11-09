import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvoiceCategoryUpdateApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
