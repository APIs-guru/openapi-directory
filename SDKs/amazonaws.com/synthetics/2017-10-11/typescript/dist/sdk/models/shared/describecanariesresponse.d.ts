import { SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";
export declare class DescribeCanariesResponse extends SpeakeasyBase {
    canaries?: Canary[];
    nextToken?: string;
}
