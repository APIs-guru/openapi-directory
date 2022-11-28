import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { Topic } from "./topic";
export declare class GetContactListResponse extends SpeakeasyBase {
    contactListName?: string;
    createdTimestamp?: Date;
    description?: string;
    lastUpdatedTimestamp?: Date;
    tags?: Tag[];
    topics?: Topic[];
}
