import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InteractionsSetRestrictionsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsSetRestrictionsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsSetRestrictionsForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InteractionLimit;
}


export class InteractionsSetRestrictionsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
