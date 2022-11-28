import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataShareStatusEnum } from "./datasharestatusenum";



// DataShareAssociation
/** 
 * The association of a datashare from a producer account with a data consumer. 
**/
export class DataShareAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consumerIdentifier?: string;

  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  status?: DataShareStatusEnum;

  @SpeakeasyMetadata()
  statusChangeDate?: Date;
}
