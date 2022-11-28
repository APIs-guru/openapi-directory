import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class District extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mdr_number" })
  mdrNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
