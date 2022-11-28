import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatus } from "./tablerestorestatus";



// TableRestoreStatusMessage
/** 
 * <p/>
**/
export class TableRestoreStatusMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: TableRestoreStatus })
  tableRestoreStatusDetails?: TableRestoreStatus[];
}
