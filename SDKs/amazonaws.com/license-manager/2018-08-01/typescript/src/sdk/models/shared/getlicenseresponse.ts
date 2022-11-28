import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";



export class GetLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=License" })
  license?: License;
}
