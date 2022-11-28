import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRef } from "./filterref";
import { ProfileRef } from "./profileref";
import { FilterRefInput } from "./filterref";
/**
 * JSON template for an Analytics profile filter link.
**/
export declare class ProfileFilterLink extends SpeakeasyBase {
    filterRef?: FilterRef;
    id?: string;
    kind?: string;
    profileRef?: ProfileRef;
    rank?: number;
    selfLink?: string;
}
/**
 * JSON template for an Analytics profile filter link.
**/
export declare class ProfileFilterLinkInput extends SpeakeasyBase {
    filterRef?: FilterRefInput;
    id?: string;
    profileRef?: ProfileRef;
    rank?: number;
}
