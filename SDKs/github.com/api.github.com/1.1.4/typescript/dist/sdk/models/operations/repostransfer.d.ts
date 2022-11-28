import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposTransferPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposTransferRequestBody extends SpeakeasyBase {
    newOwner: string;
    teamIds?: number[];
}
export declare class ReposTransferRequest extends SpeakeasyBase {
    pathParams: ReposTransferPathParams;
    request?: ReposTransferRequestBody;
}
export declare class ReposTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repository?: shared.Repository;
}
