import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * Response message for AutoMl.ListModels.
**/
export declare class ListModelsResponse extends SpeakeasyBase {
    model?: Model[];
    nextPageToken?: string;
}
