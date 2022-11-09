import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateError } from "./updateerror";
import { UpdateStatusEnum } from "./updatestatusenum";


// LastUpdate
/** 
 * The status of the last update on the environment, and any errors that were encountered.
**/
export class LastUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Error" })
  error?: UpdateError;

  @Metadata({ data: "json, name=Status" })
  status?: UpdateStatusEnum;
}
