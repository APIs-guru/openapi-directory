import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContainerLogRequest extends SpeakeasyBase {
    containerName: string;
    endTime?: Date;
    filterPattern?: string;
    pageToken?: string;
    serviceName: string;
    startTime?: Date;
}
