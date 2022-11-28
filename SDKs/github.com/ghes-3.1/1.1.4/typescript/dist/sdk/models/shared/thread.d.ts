import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
export declare class ThreadSubject extends SpeakeasyBase {
    latestCommentUrl: string;
    title: string;
    type: string;
    url: string;
}
/**
 * Thread
**/
export declare class Thread extends SpeakeasyBase {
    id: string;
    lastReadAt: string;
    reason: string;
    repository: MinimalRepository;
    subject: ThreadSubject;
    subscriptionUrl: string;
    unread: boolean;
    updatedAt: string;
    url: string;
}
