import { SpeakeasyBase } from "../../../internal/utils";
import { Workforce } from "./workforce";
export declare class ListWorkforcesResponse extends SpeakeasyBase {
    nextToken?: string;
    workforces: Workforce[];
}
