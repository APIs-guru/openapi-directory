import { SpeakeasyBase } from "../../../internal/utils";
import { Eula } from "./eula";
export declare class ListEulasResponse extends SpeakeasyBase {
    eulas?: Eula[];
    nextToken?: string;
}
