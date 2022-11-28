import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
