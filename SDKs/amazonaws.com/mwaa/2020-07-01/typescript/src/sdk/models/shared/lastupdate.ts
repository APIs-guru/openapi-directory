import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateError } from "./updateerror";
import { UpdateStatusEnum } from "./updatestatusenum";



// LastUpdate
/** 
 * The status of the last update on the environment, and any errors that were encountered.
**/
export class LastUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: UpdateError;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UpdateStatusEnum;
}
