import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeploymentsGetRequest extends SpeakeasyBase {
    pathParams: DeploymentsGetPathParams;
}
export declare class DeploymentsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deployment?: shared.Deployment;
    statusCode: number;
}
