import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetClonesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetClonesQueryParams extends SpeakeasyBase {
    per?: shared.PerEnum;
}
export declare class ReposGetClonesRequest extends SpeakeasyBase {
    pathParams: ReposGetClonesPathParams;
    queryParams: ReposGetClonesQueryParams;
}
export declare class ReposGetClonesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    cloneTraffic?: shared.CloneTraffic;
}
