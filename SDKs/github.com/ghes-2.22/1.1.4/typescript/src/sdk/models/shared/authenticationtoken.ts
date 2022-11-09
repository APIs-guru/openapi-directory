import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repository } from "./repository";

export enum AuthenticationTokenRepositorySelectionEnum {
    All = "all"
,    Selected = "selected"
}


// AuthenticationToken
/** 
 * Authentication Token
**/
export class AuthenticationToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @Metadata({ data: "json, name=permissions" })
  permissions?: Map<string, any>;

  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories?: Repository[];

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection?: AuthenticationTokenRepositorySelectionEnum;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
