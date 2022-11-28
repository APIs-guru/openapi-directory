import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create user session (log in)
**/
export declare class SessionEntity extends SpeakeasyBase {
    allowed2faMethodSms?: boolean;
    allowed2faMethodTotp?: boolean;
    allowed2faMethodU2f?: boolean;
    allowed2faMethodYubi?: boolean;
    id?: string;
    language?: string;
    loginToken?: string;
    loginTokenDomain?: string;
    maxDirListingSize?: number;
    multipleRegions?: boolean;
    readOnly?: boolean;
    rootPath?: string;
    siteId?: number;
    sslRequired?: boolean;
    tlsDisabled?: boolean;
    twoFactorSetupNeeded?: boolean;
    useProvidedModifiedAt?: boolean;
    windowsModeFtp?: boolean;
}
