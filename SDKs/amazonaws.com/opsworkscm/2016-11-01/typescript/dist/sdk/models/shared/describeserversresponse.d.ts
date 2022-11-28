import { SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
export declare class DescribeServersResponse extends SpeakeasyBase {
    nextToken?: string;
    servers?: Server[];
}
