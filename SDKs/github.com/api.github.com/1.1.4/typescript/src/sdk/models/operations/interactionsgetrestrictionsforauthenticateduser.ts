import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InteractionsGetRestrictionsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
