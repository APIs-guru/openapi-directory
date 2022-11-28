import { SpeakeasyBase } from "../../../internal/utils";
import { FileLocation } from "./filelocation";
import { ServiceMetadata } from "./servicemetadata";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * Returns properties of the execution that is specified.
**/
export declare class ListedExecution extends SpeakeasyBase {
    executionId?: string;
    initialFileLocation?: FileLocation;
    serviceMetadata?: ServiceMetadata;
    status?: ExecutionStatusEnum;
}
