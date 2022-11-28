import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
export declare class ListModelsResponse extends SpeakeasyBase {
    models?: Model[];
    nextPageToken?: string;
}
