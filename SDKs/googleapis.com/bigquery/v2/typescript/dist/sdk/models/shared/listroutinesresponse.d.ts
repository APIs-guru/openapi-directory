import { SpeakeasyBase } from "../../../internal/utils";
import { Routine } from "./routine";
export declare class ListRoutinesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    routines?: Routine[];
}
