import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deployments?: shared.Deployment[];
    statusCode: number;
}
