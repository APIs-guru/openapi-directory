import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileLocation } from "./filelocation";
import { ServiceMetadata } from "./servicemetadata";
import { ExecutionStatusEnum } from "./executionstatusenum";



// ListedExecution
/** 
 * Returns properties of the execution that is specified.
**/
export class ListedExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=InitialFileLocation" })
  initialFileLocation?: FileLocation;

  @SpeakeasyMetadata({ data: "json, name=ServiceMetadata" })
  serviceMetadata?: ServiceMetadata;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ExecutionStatusEnum;
}
