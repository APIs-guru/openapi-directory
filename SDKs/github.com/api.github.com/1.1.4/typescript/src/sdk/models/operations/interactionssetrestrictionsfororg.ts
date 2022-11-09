import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InteractionsSetRestrictionsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsSetRestrictionsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsSetRestrictionsForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.InteractionLimit;
}


export class InteractionsSetRestrictionsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;

  @Metadata()
  validationError?: shared.ValidationError;
}
