import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamesCommitteesQueryParams extends SpeakeasyBase {
    apiKey: string;
    q: string[];
}
export declare class GetNamesCommitteesRequest extends SpeakeasyBase {
    queryParams: GetNamesCommitteesQueryParams;
}
export declare class GetNamesCommitteesResponse extends SpeakeasyBase {
    committeeSearchList?: shared.CommitteeSearchList;
    contentType: string;
    statusCode: number;
}
