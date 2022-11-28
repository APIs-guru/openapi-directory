import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadata } from "./instancemetadata";
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: InstanceMetadata[];
    nextToken?: string;
}
