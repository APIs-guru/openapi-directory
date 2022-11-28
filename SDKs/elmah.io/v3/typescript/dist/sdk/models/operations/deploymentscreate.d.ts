import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentsCreateRequests extends SpeakeasyBase {
    createDeployment?: shared.CreateDeployment;
    createDeployment1?: shared.CreateDeployment;
    createDeployment2?: shared.CreateDeployment;
    createDeployment3?: shared.CreateDeployment;
}
export declare class DeploymentsCreateRequest extends SpeakeasyBase {
    request?: DeploymentsCreateRequests;
}
export declare class DeploymentsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    createDeploymentResult?: shared.CreateDeploymentResult;
    statusCode: number;
}
