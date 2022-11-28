import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
export declare class ListContactsRequest extends SpeakeasyBase {
    aliasPrefix?: string;
    maxResults?: number;
    nextToken?: string;
    type?: ContactTypeEnum;
}
