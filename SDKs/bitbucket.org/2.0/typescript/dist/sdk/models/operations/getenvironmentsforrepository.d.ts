import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnvironmentsForRepositoryPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetEnvironmentsForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentsForRepositoryPathParams;
}
export declare class GetEnvironmentsForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedEnvironments?: shared.PaginatedEnvironments;
}
