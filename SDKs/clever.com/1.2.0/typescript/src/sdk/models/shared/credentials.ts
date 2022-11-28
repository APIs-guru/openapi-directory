import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Credentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=district_username" })
  districtUsername?: string;
}
