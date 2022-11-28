import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
export declare class StoryCompact extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: UserCompact;
    gid?: string;
    resourceSubtype?: string;
    resourceType?: string;
    text?: string;
}
