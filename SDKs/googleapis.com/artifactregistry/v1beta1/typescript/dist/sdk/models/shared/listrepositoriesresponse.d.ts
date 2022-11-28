import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * The response from listing repositories.
**/
export declare class ListRepositoriesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    repositories?: Repository[];
}
