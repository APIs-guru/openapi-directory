import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationStatusNameEnum } from "./associationstatusnameenum";


// AssociationStatus
/** 
 * Describes an association status.
**/
export class AssociationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalInfo" })
  additionalInfo?: string;

  @Metadata({ data: "json, name=Date" })
  date: Date;

  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=Name" })
  name: AssociationStatusNameEnum;
}
