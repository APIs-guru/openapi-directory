import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Asp
/** 
 * An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).
**/
export class Asp extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeId" })
  codeId?: number;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastTimeUsed" })
  lastTimeUsed?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=userKey" })
  userKey?: string;
}
