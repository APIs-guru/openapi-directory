import { SpeakeasyBase } from "../../../internal/utils";
export declare class RateLimit extends SpeakeasyBase {
    limit: number;
    remaining: number;
    reset: number;
}
