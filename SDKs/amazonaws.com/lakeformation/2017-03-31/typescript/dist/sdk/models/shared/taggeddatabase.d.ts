import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseResource } from "./databaseresource";
import { LfTagPair } from "./lftagpair";
/**
 * A structure describing a database resource with tags.
**/
export declare class TaggedDatabase extends SpeakeasyBase {
    database?: DatabaseResource;
    lfTags?: LfTagPair[];
}
