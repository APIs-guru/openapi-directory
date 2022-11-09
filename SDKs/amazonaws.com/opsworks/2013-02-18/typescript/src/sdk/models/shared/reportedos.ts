import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportedOs
/** 
 * A registered instance's reported operating system.
**/
export class ReportedOs extends SpeakeasyBase {
  @Metadata({ data: "json, name=Family" })
  family?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
