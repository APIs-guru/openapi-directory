import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";
export declare class DescribeServersResponse extends SpeakeasyBase {
    nextToken?: string;
    servers?: Server[];
}
