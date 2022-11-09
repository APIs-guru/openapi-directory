import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderByEnum } from "./orderbyenum";
export declare class DescribeLogStreamsRequest extends SpeakeasyBase {
    descending?: boolean;
    limit?: number;
    logGroupName: string;
    logStreamNamePrefix?: string;
    nextToken?: string;
    orderBy?: OrderByEnum;
}
