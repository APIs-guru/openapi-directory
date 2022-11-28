import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// HsmConfiguration
/** 
 * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
**/
export class HsmConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  hsmConfigurationIdentifier?: string;

  @SpeakeasyMetadata()
  hsmIpAddress?: string;

  @SpeakeasyMetadata()
  hsmPartitionName?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
