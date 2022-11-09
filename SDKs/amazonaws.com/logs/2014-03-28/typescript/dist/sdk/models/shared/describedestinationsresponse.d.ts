import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";
export declare class DescribeDestinationsResponse extends SpeakeasyBase {
    destinations?: Destination[];
    nextToken?: string;
}
