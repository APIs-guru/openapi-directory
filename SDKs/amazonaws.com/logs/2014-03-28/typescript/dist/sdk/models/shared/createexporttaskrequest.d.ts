import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateExportTaskRequest extends SpeakeasyBase {
    destination: string;
    destinationPrefix?: string;
    from: number;
    logGroupName: string;
    logStreamNamePrefix?: string;
    taskName?: string;
    to: number;
}
