import { SpeakeasyBase } from "../../../internal/utils";
import { TokenData } from "./tokendata";
export declare class ListTokensResponse extends SpeakeasyBase {
    nextToken?: string;
    tokens?: TokenData[];
}
