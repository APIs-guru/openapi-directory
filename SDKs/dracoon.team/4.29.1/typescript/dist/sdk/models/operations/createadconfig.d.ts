import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAdConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateAdConfigRequest extends SpeakeasyBase {
    headers: CreateAdConfigHeaders;
    request: shared.CreateActiveDirectoryConfigRequest;
}
export declare class CreateAdConfigResponse extends SpeakeasyBase {
    activeDirectoryConfig?: shared.ActiveDirectoryConfig;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
