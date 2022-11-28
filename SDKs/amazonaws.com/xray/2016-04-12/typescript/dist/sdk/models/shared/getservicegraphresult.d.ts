import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
export declare class GetServiceGraphResult extends SpeakeasyBase {
    containsOldGroupVersions?: boolean;
    endTime?: Date;
    nextToken?: string;
    services?: Service[];
    startTime?: Date;
}
