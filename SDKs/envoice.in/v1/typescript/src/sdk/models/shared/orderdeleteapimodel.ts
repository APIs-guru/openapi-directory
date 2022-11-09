import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderDeleteApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
