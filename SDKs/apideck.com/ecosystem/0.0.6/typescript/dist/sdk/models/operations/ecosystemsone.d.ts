import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EcosystemsOnePathParams extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class EcosystemsOneRequest extends SpeakeasyBase {
    pathParams: EcosystemsOnePathParams;
}
export declare class EcosystemsOneResponse extends SpeakeasyBase {
    contentType: string;
    getEcosystemResponse?: shared.GetEcosystemResponse;
    statusCode: number;
}
