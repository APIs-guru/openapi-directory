import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderDeleteApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
