import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChefConfiguration
/** 
 * Describes the Chef configuration.
**/
export class ChefConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BerkshelfVersion" })
  berkshelfVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ManageBerkshelf" })
  manageBerkshelf?: boolean;
}
