import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateServerXAmzTargetEnum {
    OpsWorksCmV20161101CreateServer = "OpsWorksCM_V2016_11_01.CreateServer"
}
export declare class CreateServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServerXAmzTargetEnum;
}
export declare class CreateServerRequest extends SpeakeasyBase {
    headers: CreateServerHeaders;
    request: shared.CreateServerRequest;
}
export declare class CreateServerResponse extends SpeakeasyBase {
    contentType: string;
    createServerResponse?: shared.CreateServerResponse;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
