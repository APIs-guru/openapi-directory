import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).
**/
export declare class Asp extends SpeakeasyBase {
    codeId?: number;
    creationTime?: string;
    etag?: string;
    kind?: string;
    lastTimeUsed?: string;
    name?: string;
    userKey?: string;
}
