import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetPublicMilestoneContentPathParams extends SpeakeasyBase {
    milestoneHash: number;
}
export declare class Destiny2GetPublicMilestoneContentRequest extends SpeakeasyBase {
    pathParams: Destiny2GetPublicMilestoneContentPathParams;
}
export declare class Destiny2GetPublicMilestoneContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
