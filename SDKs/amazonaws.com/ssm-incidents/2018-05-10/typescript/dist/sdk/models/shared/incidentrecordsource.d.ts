import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about how the incident record was created and when.
**/
export declare class IncidentRecordSource extends SpeakeasyBase {
    createdBy: string;
    invokedBy?: string;
    resourceArn?: string;
    source: string;
}
