import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @Metadata({ data: "json, name=ExecutionRole" })
  executionRole?: string;

  @Metadata({ data: "json, name=InitialFileLocation" })
  initialFileLocation?: FileLocation;

  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @Metadata({ data: "json, name=PosixProfile" })
  posixProfile?: PosixProfile;

  @Metadata({ data: "json, name=Results" })
  results?: ExecutionResults;

  @Metadata({ data: "json, name=ServiceMetadata" })
  serviceMetadata?: ServiceMetadata;

  @Metadata({ data: "json, name=Status" })
  status?: ExecutionStatusEnum;
}
