import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChefConfiguration
/** 
 * Describes the Chef configuration.
**/
export class ChefConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BerkshelfVersion" })
  berkshelfVersion?: string;

  @Metadata({ data: "json, name=ManageBerkshelf" })
  manageBerkshelf?: boolean;
}
