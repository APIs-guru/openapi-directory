import { SpeakeasyBase } from "../../../internal/utils";
import { Protection } from "./protection";
export declare class ListProtectionsResponse extends SpeakeasyBase {
    nextToken?: string;
    protections?: Protection[];
}
