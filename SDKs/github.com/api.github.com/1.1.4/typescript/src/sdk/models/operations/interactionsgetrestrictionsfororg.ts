import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InteractionsGetRestrictionsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsGetRestrictionsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsGetRestrictionsForOrgPathParams;
}


export class InteractionsGetRestrictionsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
