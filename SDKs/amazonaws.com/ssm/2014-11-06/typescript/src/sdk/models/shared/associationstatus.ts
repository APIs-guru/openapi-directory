import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusNameEnum } from "./associationstatusnameenum";



// AssociationStatus
/** 
 * Describes an association status.
**/
export class AssociationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalInfo" })
  additionalInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: AssociationStatusNameEnum;
}
