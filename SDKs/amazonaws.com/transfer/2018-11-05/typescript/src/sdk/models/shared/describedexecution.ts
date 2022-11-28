import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileLocation } from "./filelocation";
import { LoggingConfiguration } from "./loggingconfiguration";
import { PosixProfile } from "./posixprofile";
import { ExecutionResults } from "./executionresults";
import { ServiceMetadata } from "./servicemetadata";
import { ExecutionStatusEnum } from "./executionstatusenum";



// DescribedExecution
/** 
 * The details for an execution object.
**/
export class DescribedExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRole" })
  executionRole?: string;

  @SpeakeasyMetadata({ data: "json, name=InitialFileLocation" })
  initialFileLocation?: FileLocation;

  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=PosixProfile" })
  posixProfile?: PosixProfile;

  @SpeakeasyMetadata({ data: "json, name=Results" })
  results?: ExecutionResults;

  @SpeakeasyMetadata({ data: "json, name=ServiceMetadata" })
  serviceMetadata?: ServiceMetadata;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ExecutionStatusEnum;
}
