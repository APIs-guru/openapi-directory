import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeVersion } from "./runtimeversion";
export declare class DescribeRuntimeVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    runtimeVersions?: RuntimeVersion[];
}
