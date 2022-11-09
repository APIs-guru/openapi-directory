import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDraftPicksQueryParams extends SpeakeasyBase {
    college?: string;
    conference?: string;
    nflTeam?: string;
    position?: string;
    year?: number;
}
export declare class GetDraftPicksRequest extends SpeakeasyBase {
    queryParams: GetDraftPicksQueryParams;
}
export declare class GetDraftPicksResponse extends SpeakeasyBase {
    contentType: string;
    draftPicks?: shared.DraftPick[];
    statusCode: number;
}
