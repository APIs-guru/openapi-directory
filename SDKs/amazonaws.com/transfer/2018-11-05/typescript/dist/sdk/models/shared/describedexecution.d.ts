import { SpeakeasyBase } from "../../../internal/utils";
import { FileLocation } from "./filelocation";
import { LoggingConfiguration } from "./loggingconfiguration";
import { PosixProfile } from "./posixprofile";
import { ExecutionResults } from "./executionresults";
import { ServiceMetadata } from "./servicemetadata";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * The details for an execution object.
**/
export declare class DescribedExecution extends SpeakeasyBase {
    executionId?: string;
    executionRole?: string;
    initialFileLocation?: FileLocation;
    loggingConfiguration?: LoggingConfiguration;
    posixProfile?: PosixProfile;
    results?: ExecutionResults;
    serviceMetadata?: ServiceMetadata;
    status?: ExecutionStatusEnum;
}
