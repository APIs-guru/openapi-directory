import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersion } from "./runtimeversion";
export declare class DescribeRuntimeVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    runtimeVersions?: RuntimeVersion[];
}
