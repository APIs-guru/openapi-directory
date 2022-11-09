import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListInvitationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListInvitationsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReposListInvitationsForAuthenticatedUserQueryParams;
}


export class ReposListInvitationsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.RepositoryInvitation })
  repositoryInvitations?: shared.RepositoryInvitation[];
}
