import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Acl } from "./acl";
export declare class DescribeAcLsResponse extends SpeakeasyBase {
    acLs?: Acl[];
    nextToken?: string;
}
