import { SpeakeasyBase } from "../../../internal/utils";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
export declare class UpdateWorkforceRequest extends SpeakeasyBase {
    oidcConfig?: OidcConfig;
    sourceIpConfig?: SourceIpConfig;
    workforceName: string;
}
