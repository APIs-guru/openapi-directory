import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ExperimentSource } from "./experimentsource";
import { Tag } from "./tag";
/**
 * The properties of an experiment as returned by the <a>Search</a> API.
**/
export declare class Experiment extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    displayName?: string;
    experimentArn?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    source?: ExperimentSource;
    tags?: Tag[];
}
