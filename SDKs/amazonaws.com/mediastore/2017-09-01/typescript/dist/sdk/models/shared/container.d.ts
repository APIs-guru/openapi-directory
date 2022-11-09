import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerStatusEnum } from "./containerstatusenum";
/**
 * This section describes operations that you can perform on an AWS Elemental MediaStore container.
**/
export declare class Container extends SpeakeasyBase {
    arn?: string;
    accessLoggingEnabled?: boolean;
    creationTime?: Date;
    endpoint?: string;
    name?: string;
    status?: ContainerStatusEnum;
}
