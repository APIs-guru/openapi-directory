import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsGetRequest extends SpeakeasyBase {
    pathParams: OrgsGetPathParams;
}
export declare class OrgsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    organizationFull?: shared.OrganizationFull;
}
