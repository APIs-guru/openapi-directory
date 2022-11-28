import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
export declare class ListAssociationsResult extends SpeakeasyBase {
    associations?: Association[];
    nextToken?: string;
}
