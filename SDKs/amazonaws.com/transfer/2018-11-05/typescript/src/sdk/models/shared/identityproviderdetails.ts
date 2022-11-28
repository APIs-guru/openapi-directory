import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityProviderDetails
/** 
 * Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
**/
export class IdentityProviderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvocationRole" })
  invocationRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
