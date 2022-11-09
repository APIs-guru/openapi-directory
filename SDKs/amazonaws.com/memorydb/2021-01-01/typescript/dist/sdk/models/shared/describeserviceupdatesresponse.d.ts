import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdate } from "./serviceupdate";
export declare class DescribeServiceUpdatesResponse extends SpeakeasyBase {
    nextToken?: string;
    serviceUpdates?: ServiceUpdate[];
}
