import { SpeakeasyBase } from "../../../internal/utils";
import { Experiment } from "./experiment";
/**
 * An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
**/
export declare class Experiments extends SpeakeasyBase {
    items?: Experiment[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
