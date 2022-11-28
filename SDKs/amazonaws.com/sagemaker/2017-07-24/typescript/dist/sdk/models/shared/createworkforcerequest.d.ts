import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
import { Tag } from "./tag";
export declare class CreateWorkforceRequest extends SpeakeasyBase {
    cognitoConfig?: CognitoConfig;
    oidcConfig?: OidcConfig;
    sourceIpConfig?: SourceIpConfig;
    tags?: Tag[];
    workforceName: string;
}
