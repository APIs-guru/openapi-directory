import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InteractionsSetRestrictionsForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InteractionLimit;
}


export class InteractionsSetRestrictionsForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
