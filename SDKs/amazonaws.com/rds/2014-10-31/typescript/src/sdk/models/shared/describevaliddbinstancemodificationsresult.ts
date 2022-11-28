import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidDbInstanceModificationsMessage } from "./validdbinstancemodificationsmessage";



export class DescribeValidDbInstanceModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  validDbInstanceModificationsMessage?: ValidDbInstanceModificationsMessage;
}
