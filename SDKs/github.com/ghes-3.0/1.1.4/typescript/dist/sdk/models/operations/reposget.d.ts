import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetRequest extends SpeakeasyBase {
    pathParams: ReposGetPathParams;
}
export declare class ReposGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    fullRepository?: shared.FullRepository;
}
