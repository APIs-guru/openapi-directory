import { SpeakeasyBase } from "../../../internal/utils";
import { DbProxy } from "./dbproxy";
export declare class DescribeDbProxiesResponse extends SpeakeasyBase {
    dbProxies?: DbProxy[];
    marker?: string;
}
