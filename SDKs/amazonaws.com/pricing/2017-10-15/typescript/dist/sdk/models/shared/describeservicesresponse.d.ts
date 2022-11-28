import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
export declare class DescribeServicesResponse extends SpeakeasyBase {
    formatVersion?: string;
    nextToken?: string;
    services?: Service[];
}
