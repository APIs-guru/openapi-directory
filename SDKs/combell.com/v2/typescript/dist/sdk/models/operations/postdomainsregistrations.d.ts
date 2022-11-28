import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDomainsRegistrationsRequest extends SpeakeasyBase {
    request?: shared.RegisterDomain;
}
export declare class PostDomainsRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
