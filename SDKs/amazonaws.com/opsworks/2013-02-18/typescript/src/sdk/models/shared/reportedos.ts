import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportedOs
/** 
 * A registered instance's reported operating system.
**/
export class ReportedOs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
