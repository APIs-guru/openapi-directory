import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileLocation } from "./filelocation";
import { ServiceMetadata } from "./servicemetadata";
import { ExecutionStatusEnum } from "./executionstatusenum";


// ListedExecution
/** 
 * Returns properties of the execution that is specified.
**/
export class ListedExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @Metadata({ data: "json, name=InitialFileLocation" })
  initialFileLocation?: FileLocation;

  @Metadata({ data: "json, name=ServiceMetadata" })
  serviceMetadata?: ServiceMetadata;

  @Metadata({ data: "json, name=Status" })
  status?: ExecutionStatusEnum;
}
