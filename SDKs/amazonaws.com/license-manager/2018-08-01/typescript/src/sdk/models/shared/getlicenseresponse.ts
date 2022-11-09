import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { License } from "./license";


export class GetLicenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=License" })
  license?: License;
}
