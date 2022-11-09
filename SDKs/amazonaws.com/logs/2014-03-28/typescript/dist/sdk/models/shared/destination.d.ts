import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents a cross-account destination that receives subscription log events.
**/
export declare class Destination extends SpeakeasyBase {
    accessPolicy?: string;
    arn?: string;
    creationTime?: number;
    destinationName?: string;
    roleArn?: string;
    targetArn?: string;
}
