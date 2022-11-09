import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductDeleteApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
