import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSshKeyPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class AddSshKeyQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class AddSshKeyRequest extends SpeakeasyBase {
    pathParams: AddSshKeyPathParams;
    queryParams: AddSshKeyQueryParams;
    request?: shared.AddSshKeyRequest;
}
export declare class AddSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
