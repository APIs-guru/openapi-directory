import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";


export enum AuthenticationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}


// AuthenticationToken
/** 
 * Authentication Token
**/
export class AuthenticationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: Repository })
  repositories?: Repository[];

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection?: AuthenticationTokenRepositorySelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
