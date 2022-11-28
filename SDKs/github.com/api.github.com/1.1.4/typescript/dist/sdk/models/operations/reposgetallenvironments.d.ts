import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAllEnvironmentsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetAllEnvironments200ApplicationJson extends SpeakeasyBase {
    environments?: shared.Environment[];
    totalCount?: number;
}
export declare class ReposGetAllEnvironmentsRequest extends SpeakeasyBase {
    pathParams: ReposGetAllEnvironmentsPathParams;
}
export declare class ReposGetAllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reposGetAllEnvironments200ApplicationJsonObject?: ReposGetAllEnvironments200ApplicationJson;
}
