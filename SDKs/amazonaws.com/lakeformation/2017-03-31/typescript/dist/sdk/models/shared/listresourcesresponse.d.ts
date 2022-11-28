import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";
export declare class ListResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceInfoList?: ResourceInfo[];
}
